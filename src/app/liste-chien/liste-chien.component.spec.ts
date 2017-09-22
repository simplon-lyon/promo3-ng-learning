import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChienComponent } from './liste-chien.component';

describe('ListeChienComponent', () => {
  let component: ListeChienComponent;
  let fixture: ComponentFixture<ListeChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
