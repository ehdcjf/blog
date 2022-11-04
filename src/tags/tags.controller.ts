import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Res, HttpStatus } from '@nestjs/common';
import {Tag} from '../schemas/tag.schema';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('/new')
	async createTag(@Res() response, @Body() tag: Tag) {
		const newTag = await this.tagsService.create(tag);
		return response.status(HttpStatus.CREATED).json({
			newTag
		})
	}

	@Get("/:ownerId")
	async fetchAllTags(@Res() response, @Param('ownerId') ownerId:string){
		const tags = await this.tagsService.findAllbyOwnerId(ownerId);
		return response.status(HttpStatus.OK).json({
			tags
		})
	}

	// @Get('/:id')
	// async getTagInfo(@Res() response, @Param('id') tagId:string) {
	// 	const tag = await this.tagsService.findOne(tagId);
	// 	return response.status(HttpStatus.OK).json({
	// 		tag
	// 	})
	// }

	@Patch('/:id')
	async update(@Res() response, @Param('id') id: string, @Body() tag: Tag) {
	    const updatedTag = await this.tagsService.update(id, tag);
	    return response.status(HttpStatus.OK).json({
		updatedTag
	    })
	}


	@Delete('/:id')
    	async delete(@Res() response, @Param('id') id:string) {
        	const deletedTagId = await this.tagsService.delete(id);

		if(deletedTagId){	
			return response.status(HttpStatus.OK).json({
				message: deletedTagId
			})
		}
  }

}

