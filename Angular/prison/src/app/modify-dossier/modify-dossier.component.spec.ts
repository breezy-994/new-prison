import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDossierComponent } from './modify-dossier.component';

describe('ModifyDossierComponent', () => {
  let component: ModifyDossierComponent;
  let fixture: ComponentFixture<ModifyDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
