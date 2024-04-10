import { Injectable } from '@angular/core';
@Injectable()

// 背Injectable装饰器装饰的类，就是一个服务，哪里需要，就在哪里注入就行了
// 服务的条件：1. 首先是一个类 2. 被Injectable装饰器装饰
export class PersonService {
  constructor() {}

  getPersons() {
    return [
      { name: 'vgri', age: 20 },
      { name: 'vae', age: 22 },
      { name: 'zbq', age: 18 },
    ];
  }
}
