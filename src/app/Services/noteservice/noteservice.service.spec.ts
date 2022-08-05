import { TestBed } from '@angular/core/testing';

import { NoteService } from './noteservice.service';

describe('NoteserviceService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
