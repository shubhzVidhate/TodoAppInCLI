import { users } from "../models/homeModel.js";

export const getHomePageParams = (req, res) => {
  const user = users.find(u=> u.id === parseInt(req.params.id));

  if (user) {
    res.render("homePrams", { user });
  }else{
    res.status(404).json("User Not Found.!!")
  }
};
