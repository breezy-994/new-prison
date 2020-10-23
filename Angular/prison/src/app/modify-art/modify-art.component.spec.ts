import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyArtComponent } from './modify-art.component';

describe('ModifyArtComponent', () => {
  let component: ModifyArtComponent;
  let fixture: ComponentFixture<ModifyArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
