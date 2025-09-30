import {NextApiRequest, NextApiResponse} from "next";
import {CreateUserDto} from "@/dtos/auth.dto";
import {UserService} from "@/services/user.service";
import {ResponseCodes} from "@/enum";
import {AppError} from "@/AppError";

export default function handler(req:NextApiRequest, res:NextApiResponse){
    const userService = new UserService();

    if(req.method !== 'POST') return res.status(405).json({code:ResponseCodes.UNALLOWED_METHOD,message:'Неразрешенный метод для этого эндпойнта'})

    const {login, email, password, password_repeat}:CreateUserDto = req.body;
    if(!email || !password || !login || !password_repeat){
        return res.status(400).json({code:ResponseCodes.ALL_FIELDS_REQUIRED, message: 'Все поля обязательны' })
    }
    if (password !== password_repeat) {
        return res.status(400).json({ code:ResponseCodes.PASSWORDS_NOT_MATHES,message: 'Пароли не совпадают' })
    }

    try{
        userService.create(req.body)
        res.status(201).json({code:ResponseCodes.SUCCESS,message:'Пользователь успешно создан'})
    }catch(err){
        if (err instanceof AppError) {
            if (err.code === ResponseCodes.USER_ALREADY_EXISTS) {
                res.status(409).json({ code: err.code, message: 'Пользователь с таким email или логином уже существует' })
            } else {
                res.status(500).json({ code: err.code, message: 'Произошла ошибка' })
            }
        } else {
            res.status(500).json({ code: 500, message: 'Неизвестная ошибка' })
        }
    }
}