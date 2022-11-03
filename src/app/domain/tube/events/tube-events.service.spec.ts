import { TestBed } from '@angular/core/testing';

import { TubeEventsService } from './tube-events.service';

describe('TubeEventsService', () => {
  let service: TubeEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TubeEventsService);
  });

  it.skip('should TODO', () => {
    expect(123).toEqual(1);
  });

});
