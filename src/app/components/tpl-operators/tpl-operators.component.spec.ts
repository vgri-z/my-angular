import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplOperatorsComponent } from './tpl-operators.component';

describe('TplOperatorsComponent', () => {
  let component: TplOperatorsComponent;
  let fixture: ComponentFixture<TplOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TplOperatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TplOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
