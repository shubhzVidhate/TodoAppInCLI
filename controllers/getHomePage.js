import {users} from '../models/homeModel.js';

export const gethomePage = (req,res)=>{
    
    res.render("home",{users});
    
};

