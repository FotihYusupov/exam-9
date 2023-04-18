/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { Author } from '../author/author.entity';
import { Category } from '../categories/categories.entity';
import { Comments } from '../comments/comment.entity';

@Entity({ name: 'books' })
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true
  })
  title: string;

  @Column({
    type: 'integer',
    nullable: true,
  })
  pages: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true,
  })
  price: string;

  @Column({
    type: 'varchar',
    length: '64',
    nullable: true,
  })
  country: string;

  @Column({
    type: 'varchar',
    length: '64',
    nullable: true,
  })
  desc: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  img: string;

  @ManyToOne(() => User, (user) => user.books, {nullable: true})
  user: User

  @ManyToOne(() => Author, (author) => author.books)
  author: Author

  @ManyToOne(() => Category, (category) => category.books)
  category: Category

  @OneToMany(() => Comments, (comment) => comment.book)
  comments: Comments[]
}
