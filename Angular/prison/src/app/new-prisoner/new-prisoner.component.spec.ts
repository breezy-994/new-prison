import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrisonerComponent } from './new-prisoner.component';

describe('NewPrisonerComponent', () => {
  let component: NewPrisonerComponent;
  let fixture: ComponentFixture<NewPrisonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPrisonerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
