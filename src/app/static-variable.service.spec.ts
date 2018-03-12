import { TestBed, inject } from '@angular/core/testing';

import { StaticVariableService } from './static-variable.service';

describe('StaticVariableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticVariableService]
    });
  });

  it('should be created', inject([StaticVariableService], (service: StaticVariableService) => {
    expect(service).toBeTruthy();
  }));
});
