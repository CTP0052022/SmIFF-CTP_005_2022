import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallComponent } from './adminall.component';

describe('AdminallComponent', () => {
  let component: AdminallComponent;
  let fixture: ComponentFixture<AdminallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
