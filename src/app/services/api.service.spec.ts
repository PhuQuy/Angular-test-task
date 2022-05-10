import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';


describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate words correctly', () => {
    expect(service.mapCountWords('a b c d a')).toEqual([
      {
        value: 'a',
        count: 2
      },
      {
        value: 'b',
        count: 1
      },
      {
        value: 'c',
        count: 1
      },
      {
        value: 'd',
        count: 1
      }
    ])
  });
});
