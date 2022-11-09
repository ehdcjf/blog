import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { UserLoginDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	}

	async findAll(): Promise<User[]> {
		return await this.userModel.find({}, { id: 1, name: 1 }).exec();
	}

	async findOne(id: string): Promise<User> {
		const [user] = await this.userModel.find({id}).exec();
		return user
	}

	async update(id: string, User: User): Promise<User> {
		return await this.userModel.findByIdAndUpdate(id, User, { new: true });
	}

	async delete(id: string): Promise<string> {
		const deletedUser = await this.userModel.findByIdAndRemove(id);
		return deletedUser.id;
	}

	async login(loginUserDto: UserLoginDto): Promise<UserLoginDto>{
		const [result] = await this.userModel.find({...loginUserDto});
		return result
	}
}
