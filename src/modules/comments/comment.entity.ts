/* eslint-disable prettier/prettier */
import { User } from 'src/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from '../books/book.entity';

@Entity({ name: 'Comments' })
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true,
  })
  comment_body: string;

  @ManyToOne(() => Book, (book) => book.comments)
  book: Book

  @ManyToOne(() => User, (user) => user.comments)
  user: User
}
