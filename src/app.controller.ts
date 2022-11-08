import { Controller, Get, Res, Render} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	@Render('index')
	getHello() {
		console.log('hello')
		return {message:"Hello world!"};
	}
}
