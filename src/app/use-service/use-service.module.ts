import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceIntroductionComponent } from './service-introduction/service-introduction.component';
import { UseServiceComponent } from './use-service/use-service.component';
import { PersonService } from '../services/person.service';

@NgModule({
  declarations: [ServiceIntroductionComponent, UseServiceComponent],
  imports: [CommonModule],
  providers: [
    // 在NgModule中提供服务
    // { provide: PersonService, useClass: PersonService },
    // 如果provide与useClass的值是一样的，就可以直接写成PersonService
    // PersonService,
  ],
  exports: [UseServiceComponent],
})
export class UseServiceModule {}
