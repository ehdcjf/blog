import { Controller, Get, Post, Body, Patch, Param, Delete,Res, HttpStatus } from '@nestjs/common';
import { HistoryService } from './history.service';
import {History} from '../schemas/history.schema';

@Controller('history')
export class HistoryController {
	constructor(private readonly historyService: HistoryService) {}

	@Post()
	async create(@Res() response, @Body() history: History) {
		const newHistory = await this.historyService.create(history);
		return response.status(HttpStatus.CREATED).json({
			newHistory
		});
	}

	@Get('/list/:ownerId')
	async fetchAllbyOwnerId(@Res() response, @Param('ownerId') ownerId: string) {
		const historyArr = await this.historyService.findAllbyOwnerId(ownerId);
		console.log("historyArr", historyArr);
		return response.status(HttpStatus.OK).json({
			historyArr
		})
	}

	@Get('/:id')
	async findOne(@Res() response, @Param('id') historyId:string) {
		const history = await this.historyService.findOne(historyId);
		return response.status(HttpStatus.OK).json({
			history
		})
	}

	@Patch('/:id')
	async update(@Res() response, @Param('id') id: string, @Body() history: History) {
		const updatedHistory =  await this.historyService.update(id, history)
		return response.status(HttpStatus.OK).json({
			updatedHistory
		})
	}
	
	@Delete('/:id')
	async delete(@Res() response, @Param('id') id: string) {
		const deletedHistory = await this.historyService.delete(id);
		return response.status(HttpStatus.OK).json({
			deletedHistory,
		})
	}
}
