import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async handleSpotifyLogin(user: any) {
    return {
      message: 'Login successful!',
      user,
    };
  }
}
