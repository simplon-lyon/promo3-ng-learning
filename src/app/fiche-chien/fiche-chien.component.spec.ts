import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheChienComponent } from './fiche-chien.component';

describe('FicheChienComponent', () => {
  let component: FicheChienComponent;
  let fixture: ComponentFixture<FicheChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
