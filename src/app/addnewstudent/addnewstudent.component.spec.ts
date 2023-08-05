import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewstudentComponent } from './addnewstudent.component';

describe('AddnewstudentComponent', () => {
  let component: AddnewstudentComponent;
  let fixture: ComponentFixture<AddnewstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewstudentComponent]
    });
    fixture = TestBed.createComponent(AddnewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
