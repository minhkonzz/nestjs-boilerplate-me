import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect() {
    return { msg: "OK" }
  }
}
