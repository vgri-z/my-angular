import { Component } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-service-introduction',
  templateUrl: './service-introduction.component.html',
  styles: ``,
  providers: [PersonService], // 在组件(@Component装饰器中)中提供服务
})
export class ServiceIntroductionComponent {
  // personService: PersonService | undefined;
  persons: { name: string; age: number }[] = [];
  constructor(readonly personService: PersonService) {
    // this.personService = new PersonService();
    this.persons = this.personService.getPersons();
  }
}
