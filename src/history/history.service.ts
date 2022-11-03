import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { History, HistoryDocument } from '../schemas/history.schema';


@Injectable()
export class HistoryService {
	constructor(@InjectModel(History.name) private historyModel: Model<HistoryDocument>) { }

	async create(history: History): Promise<History> {
		const newHistory = new this.historyModel(history);
		return newHistory.save();
	}

	async findAllbyOwnerId(ownerId: string): Promise<History[]> {
		const history = await this.historyModel.find({ owner: ownerId }).populate('owner', 'id').exec();
		return history;
	}

	async findOne(id: string): Promise<History> {
		return await this.historyModel.findById(id).exec();
	}

	async update(id: string, History: History): Promise<History> {
		return await this.historyModel.findByIdAndUpdate(id, History, { new: true });
	}

	async delete(id: string) {
		return await this.historyModel.findByIdAndDelete(id);
	}
}
