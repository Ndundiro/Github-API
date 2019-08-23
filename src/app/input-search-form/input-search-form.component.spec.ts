import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchFormComponent } from './input-search-form.component';

describe('InputSearchFormComponent', () => {
  let component: InputSearchFormComponent;
  let fixture: ComponentFixture<InputSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
