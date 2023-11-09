import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesSerializerInterceptor } from './roles-serializer.interceptor';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: RolesGuard,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: RolesSerializerInterceptor,
    },
  ],
})
export class AppModule {}
