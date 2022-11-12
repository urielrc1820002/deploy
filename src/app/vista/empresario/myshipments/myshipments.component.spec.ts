import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshipmentsComponent } from './myshipments.component';

describe('MyshipmentsComponent', () => {
  let component: MyshipmentsComponent;
  let fixture: ComponentFixture<MyshipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyshipmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
