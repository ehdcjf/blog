import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Tag, TagDocument} from '../schemas/tag.schema';

@Injectable()
export class TagsService {
        constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>){};
        
	async create(tag: Tag): Promise<Tag> {
		const newTag = new this.tagModel(tag);
		return newTag.save();
	}

	async findAllbyOwnerId(ownerId: string): Promise<Tag[]> {
		const tags = await this.tagModel.find({ owner: ownerId }).populate('owner', 'id').exec();
		return tags;
	}

	async findOne(id: string): Promise<Tag> {
		return await this.tagModel.findById(id).exec();
	}

	async update(id: string, Tag: Tag): Promise<Tag> {
		return await this.tagModel.findByIdAndUpdate(id, Tag, { new: true });
	}

	async delete(id: string) {
		return await this.tagModel.findByIdAndDelete(id);
	}
}
