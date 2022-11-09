import { Controller, Get,Post, Res, Render, Body} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
@Controller()
export class AppController {
	constructor(private readonly appService: AppService,private readonly userService: UsersService, ) { }

	@Get()
	@Render('index')
	getHello() {
		return {message:"LHOIKTN"};
	}

		
	@Get('/login')
	@Render('login')
	async login(){
		return;
	}
	


	@Get('/join')
	@Render('join')
	async join(){
		return;
	}
}
