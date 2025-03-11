import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('spotify')
  @UseGuards(AuthGuard('spotify'))
  async spotifyLogin() {
    return { message: 'Redirecting to Spotify...' };
  }

  @Get('callback')
  @UseGuards(AuthGuard('spotify'))
  async spotifyCallback(@Req() req) {
    return this.authService.handleSpotifyLogin(req.user);
  }
}
