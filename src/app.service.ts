import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		console.log('hello')
		console.log(process.env.DATABASE_HOST)
		return process.env.DATABASE_HOST;
	}
}
