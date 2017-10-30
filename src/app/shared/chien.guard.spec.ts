import { TestBed, async, inject } from '@angular/core/testing';

import { ChienGuard } from './chien.guard';

describe('ChienGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChienGuard]
    });
  });

  it('should ...', inject([ChienGuard], (guard: ChienGuard) => {
    expect(guard).toBeTruthy();
  }));
});
