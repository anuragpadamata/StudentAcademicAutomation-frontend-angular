import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresultsComponent } from './adminresults.component';

describe('AdminresultsComponent', () => {
  let component: AdminresultsComponent;
  let fixture: ComponentFixture<AdminresultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminresultsComponent]
    });
    fixture = TestBed.createComponent(AdminresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
