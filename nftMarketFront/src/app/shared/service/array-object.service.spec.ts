import { TestBed } from '@angular/core/testing';

import { ArrayObjectService } from './array-object.service';

describe('ArrayObjectService', () => {
  let service: ArrayObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
