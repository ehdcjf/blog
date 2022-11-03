import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Res, HttpStatus } from '@nestjs/common';
import {Tag} from '../schemas/history.schema';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('/new')
	async createUser(@Res() response, @Body() tag: Tag): Promise<Tag> {
		const newUser = await this.tagsService.create(tag);
		return response.status(HttpStatus.CREATED).json({
			newUser
		})
	}

	@Get()
	async fetchAllUsers(@Res() response){
		const users = await this.tagsService.findAll();
		return response.status(HttpStatus.OK).json({
			users
		})
	}

	@Get('/:id')
	async getUserInfo(@Res() response, @Param('id') userId:string) {
		const user = await this.tagsService.findOne(userId);
		return response.status(HttpStatus.OK).json({
			user
		})
	}

	@Patch('/:id')
	async update(@Res() response, @Param('id') id: string, @Body() user: User) {
	    const updatedUser = await this.tagsService.update(id, user);
	    return response.status(HttpStatus.OK).json({
		updatedUser
	    })
	}


	@Delete('/:id')
    	async delete(@Res() response, @Param('id') id:string) {
        	const deletedUserId = await this.tagsService.delete(id);

		if(deletedUserId){	
			return response.status(HttpStatus.OK).json({
				message: deletedUserId
			})
		}
  }

}

