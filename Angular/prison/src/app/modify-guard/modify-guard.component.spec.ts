import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyGuardComponent } from './modify-guard.component';

describe('ModifyGuardComponent', () => {
  let component: ModifyGuardComponent;
  let fixture: ComponentFixture<ModifyGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
