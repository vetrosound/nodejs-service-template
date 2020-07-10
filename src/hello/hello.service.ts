import { Injectable, Logger } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class HelloService {
  constructor(private log: Logger) {
    this.log.setContext(HelloService.name);
  }

  getHello(name: string): Observable<string> {
    this.log.debug(`Getting hello for ${name}`);
    return of(`Hello, ${name}`);
  }
}
