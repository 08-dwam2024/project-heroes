import { Models } from "./imports/model/model.js"

async function auth(req, res, next) {
    // console.log("Middleware ici")

    let token = req.headers.authorization;
    // console.log("🚀 ~ auth ~ token:", token)
    
    if (!token) {
        return res.send({ error: 'Token not found' });
    }

    let { User } = Models;
    let user = await User.findOne({where:{token : token}});
    if (!user) {
        return res.send({ error: 'User not found' })
    }

    next()
}

export const Middlewares = {
    auth : auth  
}