import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class AppService {
  getUser(): UserDto {
    return new UserDto({
      id: 1,
      username: 'john',
      email: 'foo@bar.com',
      role: 'admin',
    });
  }
}
