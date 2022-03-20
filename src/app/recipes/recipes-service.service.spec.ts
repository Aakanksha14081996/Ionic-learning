import { TestBed } from '@angular/core/testing';

import { RecipesServiceService } from './recipes-service.service';

describe('RecipesServiceService', () => {
  let service: RecipesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
