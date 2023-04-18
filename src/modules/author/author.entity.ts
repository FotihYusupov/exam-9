/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from '../books/book.entity'; 

@Entity({ name: 'authors' })
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true
  })
  last_name: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true
  })
  data_birth: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true
  })
  data_death: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true
  })
  country: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  bio: string;

  @Column({
    type: 'text',
    nullable: true
  })
  img: string;

  @OneToMany(() => Book, (book) => book.author)
    books: Book[]
}
