import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, userPassword: string): Promise<any> {
    const { password, ...user } = await this.userService.findOne(email);

    if (password !== userPassword) {
      throw new UnauthorizedException();
    }

    const payload = { ...user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
