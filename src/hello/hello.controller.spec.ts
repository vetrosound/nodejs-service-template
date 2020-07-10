import { Test, TestingModule } from '@nestjs/testing';

import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { Logger } from '@nestjs/common';

describe('HelloController', () => {
  let controller: HelloController;
  const name = 'John';

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService, Logger],
    }).compile();

    controller = app.get<HelloController>(HelloController);
  });

  describe('getHello', () => {
    it(`should return "Hello, ${name}"`, done => {
      controller.getHello(name).subscribe(res => {
        expect(res).toBe(`Hello, ${name}`);
        done();
      });
    });
  });
});
