import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
// import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
  ) {}

  async create(createBookDto: any, userId: number, filename) {
    createBookDto.user = userId;
    createBookDto.img = filename;
    const book = this.bookRepo.create(createBookDto);
    return this.bookRepo.save(book);
  }

  findAll() {
    return this.bookRepo.find({
      relations: { user: true, author: true, category: true, comments: true },
    });
  }

  async findOne(id: number) {
    const books = await this.bookRepo.find({
      where: { id: id },
      relations: { user: true, author: true, category: true, comments: true },
    });
    return books;
  }

  async findBy(categoryId: any, authorId: any) {
    const books: any = await this.bookRepo.find({
      relations: { user: true, author: true, category: true, comments: true },
    });
    if (categoryId !== undefined) {
      const book = books.filter((e) => e.category.id == categoryId);
      return book;
    } else if (authorId !== undefined) {
      const book = books.filter((e) => e.author.id == authorId);
      return book;
    }
  }
}
