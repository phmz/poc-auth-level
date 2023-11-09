import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET user with role "admin"', () => {
    return request(app.getHttpServer())
      .get('/user?role=admin')
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('username');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('role');
      });
  });

  it('/GET user with role "user"', () => {
    return request(app.getHttpServer())
      .get('/user?role=user')
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('username');
        expect(response.body).toHaveProperty('email');
        expect(response.body).not.toHaveProperty('role');
      });
  });

  it('/GET user with role "support"', () => {
    return request(app.getHttpServer())
      .get('/user?role=support')
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('username');
        expect(response.body).not.toHaveProperty('email');
        expect(response.body).toHaveProperty('role');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
