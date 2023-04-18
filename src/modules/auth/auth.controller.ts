import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuards } from './guards/local.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Req() req: Request, @Body() body: any) {
    return this.authService.create(body);
  }

  @Post('signin')
  signin(@Body() body: any) {
    return this.authService.login(body);
  }
}
