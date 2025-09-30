import {UserRepository} from "@/repositories/user.repository";
import {CreateUserDto} from "@/dtos/auth.dto";

export class UserService {
    private repository = new UserRepository();

    create(dto: CreateUserDto) {
        try{
            return this.repository.create(dto)
        }catch (error){
            throw error
        }
    }
}