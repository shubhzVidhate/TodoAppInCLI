import http from "http";

// this is used for short URI
import { v4 as uuidv4 } from "uuid";

import fs from "fs";
import { error } from "console";


const port = 1000;
const urls = {};


//  function is used to Save URI into  urls.json file 

function saveUrl() {
  fs.writeFileSync("urls.json", JSON.stringify(urls, null, 2));
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/shorten") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const { originalUrl } = JSON.parse(body);

        if (!originalUrl) {
          res.writeHead(400, { "content-type": "application/json" });
          return res.end(
            JSON.stringify({ error: "Original URI is Required..!!" }),
          );
        }

        const ShortId = uuidv4().slice(0,6);
        urls[ShortId] = originalUrl;
        saveUrl();
        res.writeHead(201,{ "content-type": "application/json" });
        res.end(JSON.stringify({ shortURI : ` http://localhost:${port}/${ShortId} `}));


      } catch (error) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Internal server Error" }));
      }
    });
  } else if(req.method === "GET"){

    const shortID = req.url.slice(1); // remove leading "/"

    if(urls[shortID]){
        res.writeHead(302, {location : urls[shortID]});
        res.end();
    }else{
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({error:"URI Not Found.!!"}));
    }

  }else{
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({error:"Not Found.!!"}));
  }
});

server.listen(`${port}`,()=>{
    console.log(`Server Start on ${port}`);
})
