import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { UserRole } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const queryRole = request.query.role;
    if (!Object.values(UserRole).includes(queryRole)) {
      throw new ForbiddenException();
    }

    return true;
  }
}
