import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  validateUser(user_email: string, user_password: string) {
    const user = this.userRepo.findOne({
      where: {
        user_email,
        user_password,
      },
    });
    return true;
  }

  async login(data: any) {
    const user = await this.userRepo.findOne({
      where: {
        user_email: data.user_email,
        user_password: data.user_password,
      },
    });
    if (!user) {
      throw new UnauthorizedException();
    }

    const token = this.jwtService.sign({ userId: user.id });
    return token;
  }

  async create(data: CreateUserDto) {
    const user: any = this.userRepo.create(data);
    const users = await this.userRepo.save(user);
    const token = this.jwtService.sign({ userId: users.id });
    return token;
  }
}
