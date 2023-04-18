import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuards } from '../auth/guards/jwt.guards';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtGuards)
  @Post()
  create(@Req() req: any, @Body() createBookDto: any) {
    return this.commentsService.create(createBookDto, req.user.userId);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }
}
