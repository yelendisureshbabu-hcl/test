import { TestBed } from '@angular/core/testing';

import { GetCityCoordinatesService } from './get-city-coordinates.service';

describe('GetCityCoordinatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCityCoordinatesService = TestBed.get(GetCityCoordinatesService);
    expect(service).toBeTruthy();
  });
});
