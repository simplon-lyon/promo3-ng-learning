import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormsComponent } from './model-forms.component';

describe('ModelFormsComponent', () => {
  let component: ModelFormsComponent;
  let fixture: ComponentFixture<ModelFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
