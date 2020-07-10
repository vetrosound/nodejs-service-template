import { Controller, Get, HttpCode, Param, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(
    private readonly helloService: HelloService,
    private log: Logger,
  ) {
    this.log.setContext(HelloController.name);
  }

  @Get('/:name')
  @HttpCode(200)
  getHello(@Param('name') name: string): Observable<string> {
    this.log.debug(`Received request for ${name}`);
    return this.helloService.getHello(name);
  }
}
