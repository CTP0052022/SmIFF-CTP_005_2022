import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpetrolComponent } from './adminpetrol.component';

describe('AdminpetrolComponent', () => {
  let component: AdminpetrolComponent;
  let fixture: ComponentFixture<AdminpetrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpetrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpetrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
