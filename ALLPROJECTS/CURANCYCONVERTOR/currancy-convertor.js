import axios from 'axios';
import readline from 'readline';

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

const API_URL = 'https://v6.exchangerate-api.com/v6/c3223cfbf3b9b0fa57386b5a/latest';

async function currencyConverter(from,to,amount) {
    try {
        const res = await axios.get(`${API_URL}/${from}`);
        const rates = res.data.conversion_rates;
        if(!rates[to.toUpperCase()]){
            console.log(`currency Code ${to} Not Found.!!`);
        }
       
        const converted = amount * rates[to.toUpperCase()];

        console.log(`base Currency ${from.toUpperCase()} coverted into ${to.toUpperCase()} total Converted Amount is ${converted.toFixed(2)}`)

    } catch (error) {
        console.log(`Error Ocuerd at the time of ${to.toUpperCase()} fetching`);
    }
}

rl.question("Enter Target Currency code (USD) ", (from)=>{
    rl.question("Enter Based Currency (INR) ", (to)=>{
        rl.question("Enter Amount to Convert ",(amount)=>{
            currencyConverter(from,to,amount)
        })
    })
});

