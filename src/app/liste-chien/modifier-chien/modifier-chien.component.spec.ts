import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierChienComponent } from './modifier-chien.component';

describe('ModifierChienComponent', () => {
  let component: ModifierChienComponent;
  let fixture: ComponentFixture<ModifierChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
