import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutChienComponent } from './ajout-chien.component';

describe('AjoutChienComponent', () => {
  let component: AjoutChienComponent;
  let fixture: ComponentFixture<AjoutChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
