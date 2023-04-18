/* eslint-disable prettier/prettier */
import { Book } from 'src/modules/books/book.entity';
import { Comments } from 'src/modules/comments/comment.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
    unique: true,
  })
  user_email: string;

  @Column({
    type: 'varchar',
    length: '64',
    nullable: false,
  })
  user_password: string;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];

  @OneToMany(() => Comments, (comment) => comment.user)
  comments: Comments[];
}
