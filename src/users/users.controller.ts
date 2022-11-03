import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { VerifyEmailDto } from './dto/verify.email.dto';
import { UserLoginDto } from './dto/login-user.dto';
import { User } from '../schemas/user.schema';
// import { UserInfo } from './UserInfo';
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('/new')
	async createUser(@Res() response, @Body() createUserDto: CreateUserDto): Promise<User> {
		const newUser = await this.usersService.create(createUserDto);
		return response.status(HttpStatus.CREATED).json({
			newUser
		})
	}

	@Get()
	async fetchAllUsers(@Res() response){
		const users = await this.usersService.findAll();
		return response.status(HttpStatus.OK).json({
			users
		})
	}

	@Get('/:id')
	async getUserInfo(@Res() response, @Param('id') userId:string) {
		const user = await this.usersService.findOne(userId);
		return response.status(HttpStatus.OK).json({
			user
		})
	}

	@Patch('/:id')
	async update(@Res() response, @Param('id') id: string, @Body() user: User) {
	    const updatedUser = await this.usersService.update(id, user);
	    return response.status(HttpStatus.OK).json({
		updatedUser
	    })
	}


	@Delete('/:id')
    	async delete(@Res() response, @Param('id') id:string) {
        	const deletedUserId = await this.usersService.delete(id);

		if(deletedUserId){	
			return response.status(HttpStatus.OK).json({
				message: deletedUserId
			})
		}
    }


}
//curl -X POST http://localhost:3000/users/new -H "Content-Type: application/json" -d '{"name": "Beatrix Kiddo", "id": "Bride", "password": "1234" }'