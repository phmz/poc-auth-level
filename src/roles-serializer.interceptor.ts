import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class RolesSerializerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const queryRole = request.query.role;

    return next.handle().pipe(
      map((data) => {
        return instanceToPlain(data, {
          groups: [queryRole],
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
