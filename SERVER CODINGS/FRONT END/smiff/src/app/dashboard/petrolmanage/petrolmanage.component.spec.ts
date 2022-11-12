import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolmanageComponent } from './petrolmanage.component';

describe('PetrolmanageComponent', () => {
  let component: PetrolmanageComponent;
  let fixture: ComponentFixture<PetrolmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolmanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
