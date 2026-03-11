import { Response } from "express"

export const success = (res: Response,data:any,status = 200)=>{
    return res.status(status).json({
        success: true,
        data,
        error: null
    })
}

export const error = (res:Response,code:string,status =400)=>{
    return res.status(status).json({
        success: false,
        data: null,
        error: code
    })
}