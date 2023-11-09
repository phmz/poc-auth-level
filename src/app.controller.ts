import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getUser(): UserDto {
    return this.appService.getUser();
  }
}
