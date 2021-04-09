import { TestBed } from '@angular/core/testing';

import { ErrorHandlerInterceptorService } from './error-handler-interceptor.service';

describe('ErroHandlerInterceptorService', () => {
  let service: ErrorHandlerInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlerInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
