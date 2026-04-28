import { getHomeData } from '../models/homeModel.js';

export const getHomePage = (req,res)=>{
    const data = getHomeData();
    res.render('home',data);
};

