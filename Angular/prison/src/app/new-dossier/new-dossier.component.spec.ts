import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDossierComponent } from './new-dossier.component';

describe('NewDossierComponent', () => {
  let component: NewDossierComponent;
  let fixture: ComponentFixture<NewDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
