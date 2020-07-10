import { Test, TestingModule } from '@nestjs/testing';

import { HelloService } from './hello.service';
import { Logger } from '@nestjs/common';

describe('HelloService', () => {
  let service: HelloService;
  const name = 'John';

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [HelloService, Logger],
    }).compile();

    service = app.get<HelloService>(HelloService);
  });

  describe('getHello', () => {
    it(`should return "Hello, ${name}"`, done => {
      service.getHello(name).subscribe(res => {
        expect(res).toBe(`Hello, ${name}`);
        done();
      });
    });
  });
});
