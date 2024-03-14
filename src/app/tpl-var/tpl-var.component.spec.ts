import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplVarComponent } from './tpl-var.component';

describe('TplVarComponent', () => {
  let component: TplVarComponent;
  let fixture: ComponentFixture<TplVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TplVarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TplVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
