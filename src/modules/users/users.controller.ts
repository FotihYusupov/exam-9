import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuards } from '../auth/guards/jwt.guards';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtGuards)
  @Get('user')
  find(@Req() req: any) {
    return this.usersService.find(req.user.userId);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtGuards)
  @Put()
  update(@Body() body: UpdateUserDto, @Req() req: any) {
    return this.usersService.update(body, req.user.userId);
  }

  @UseGuards(JwtGuards)
  @Put('update-password')
  updatePassword(@Body() body: any, @Req() req: any) {
    return this.usersService.updatePassword(body, req.user.userId);
  }
}
