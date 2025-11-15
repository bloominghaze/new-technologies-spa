import { TestBed } from '@angular/core/testing';
import { BaseUrl } from './base-url-interceptor';

describe('BaseUrl', () => {
  let interceptor: BaseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseUrl
      ]
    });
    interceptor = TestBed.inject(BaseUrl);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
