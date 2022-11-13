import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpetrolComponent } from './addpetrol.component';

describe('AddpetrolComponent', () => {
  let component: AddpetrolComponent;
  let fixture: ComponentFixture<AddpetrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpetrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpetrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
