import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private readonly commentRepo: Repository<Comments>,
  ) {}
  create(createCommentDto: any, userId: any) {
    createCommentDto.userId = userId;
  }

  findAll() {
    return this.commentRepo.find();
  }
}
