import { TestBed, inject } from '@angular/core/testing';

import { CompteurService } from './compteur.service';

describe('CompteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompteurService]
    });
  });

  it('should be created', inject([CompteurService], (service: CompteurService) => {
    expect(service).toBeTruthy();
  }));
});
