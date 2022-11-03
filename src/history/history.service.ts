import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { History, HistoryDocument} from '../schemas/history.schema';


@Injectable()
export class HistoryService {
  constructor(@InjectModel(History.name) private historyModel: Model<HistoryDocument>){}

  async create(history: History): Promise<History> {
    const newHistory = new this.historyModel(history);
    return newHistory.save();
  }

  async findAllbyOwnerId(id: string): Promise<History[]>{
    const history = await this.historyModel.find({owner:id}).populate('owner','id').exec();
    console.log(history);
    return history;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
