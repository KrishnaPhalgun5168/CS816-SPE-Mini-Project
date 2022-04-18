import { TestBed } from '@angular/core/testing';

import { WebService } from './web.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('WebService', () => {
//   let service: WebService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(WebService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('WebService', () => {
  let service: WebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
