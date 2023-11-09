import { Expose } from 'class-transformer';

export class UserDto {
  @Expose({ groups: ['admin', 'support', 'user'] })
  id: number;

  @Expose({ groups: ['admin', 'support', 'user'] })
  username: string;

  @Expose({ groups: ['admin', 'user'] })
  email: string;

  @Expose({ groups: ['admin', 'support'] })
  role: string;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
