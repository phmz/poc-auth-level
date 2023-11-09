import { Expose } from 'class-transformer';
import { UserRole } from './roles.enum';

export class UserDto {
  @Expose({ groups: [UserRole.ADMIN, UserRole.SUPPORT, UserRole.USER] })
  id: number;

  @Expose({ groups: [UserRole.ADMIN, UserRole.SUPPORT, UserRole.USER] })
  username: string;

  @Expose({ groups: [UserRole.ADMIN, UserRole.USER] })
  email: string;

  @Expose({ groups: [UserRole.ADMIN, UserRole.SUPPORT] })
  role: string;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
