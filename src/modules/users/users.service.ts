import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async createUser(user_email: string, user_password: string) {
    return this.userRepository.create({
      user_email,
      user_password,
    });
  }
  async getUser(user_email: string) {
    return this.userRepository.find({
      where: {
        user_email,
      },
    });
  }

  async find(userId: number) {
    return this.userRepository.findOne({
      where: { id: userId },
      relations: { books: true },
    });
  }

  async findAll() {
    return this.userRepository.find({
      relations: { books: true },
    });
  }

  async update(data: UpdateUserDto, userId: number) {
    this.userRepository.update({ id: userId }, data);
    return this.userRepository.findOne({
      where: { id: userId },
    });
  }

  async updatePassword(data: any, userId: number) {
    this.userRepository.update({ id: userId }, data);
    return this.userRepository.findOne({
      where: { id: userId },
    });
  }
}
