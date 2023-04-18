import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './modules/categories/categories.module';
import { Book } from './modules/books/book.entity';
import { BooksModule } from './modules/books/books.module';
import { AuthorModule } from './modules/author/author.module';
import { Category } from './modules/categories/categories.entity';
import { Author } from './modules/author/author.entity';
import { UsersModule } from './modules/users/users.module';
import { CommentsModule } from './modules/comments/comments.module';
import { Comments } from './modules/comments/comment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      port: 5432,
      host: process.env.PG_HOST,
      password: process.env.PG_PASSWORD,
      entities: [User, Book, Category, Author, Comments],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    BooksModule,
    CategoriesModule,
    AuthorModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
