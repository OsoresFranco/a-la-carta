import { TestBed } from '@angular/core/testing';

import { SearchDishService } from './search-dish.service';

describe('SearchDishService', () => {
  let service: SearchDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
