import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpetrolComponent } from './loginpetrol.component';

describe('LoginpetrolComponent', () => {
  let component: LoginpetrolComponent;
  let fixture: ComponentFixture<LoginpetrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpetrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpetrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
