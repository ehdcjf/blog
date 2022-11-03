import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/databaseConfig';
import { validationSchema } from './config/validationSchema';
import { HistoryModule } from './history/history.module';

@Module({
	imports: [
		UsersModule,
		ConfigModule.forRoot({
			envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
			load: [databaseConfig],
			isGlobal: true,
			validationSchema,
		      }),
		MongooseModule.forRoot(process.env.DATABASE_HOST),
		HistoryModule		
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
