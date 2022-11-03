import { Controller, Get, Post, Body, Patch, Param, Delete,Res, HttpStatus } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
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

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.historyService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
		return this.historyService.update(+id, updateHistoryDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.historyService.remove(+id);
	}
}
