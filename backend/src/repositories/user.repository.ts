import Database from "better-sqlite3";
import {CreateUserDto} from "@/dtos/auth.dto";
import {UserEntity} from "@/entities/user.entity";
import {ResponseCodes} from "@/enum";
import {AppError} from "@/AppError";

const db = new Database('database.sqlite');
db.prepare(`create table if not exists users (
        id integer primary key autoincrement,
        login text,
        email text, 
        password text
    )`).run()

export class UserRepository{
    create(dto: CreateUserDto):UserEntity {
        const existingUser = db.prepare('select * from users where email = ? OR login = ?').get(dto.email,dto.login)
        if (existingUser) {
            throw new AppError(ResponseCodes.USER_ALREADY_EXISTS,'Пользователь с таким логином или email уже существует');
        }

        const result = db.prepare('insert into users (login,email,password) values (?,?,?)').run(dto.login,dto.email,dto.password)
        return { id: result.lastInsertRowid as number, ...dto };
    }
}