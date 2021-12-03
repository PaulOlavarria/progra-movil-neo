import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { Storage } from '@ionic/storage';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let authServiceSpy;
  let mockStorage;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthenticationService', {
      isLogged: 0,
      logout: 0,
      login: 0,
      presentToast: 0,
      isAuthenticated: 0
    });
    mockStorage = jasmine.createSpyObj('USER_DATA', {
      get: 0,
      set: 0
    });
    TestBed.configureTestingModule({
      providers: [{
        provide: Storage,
        useValue: mockStorage
      }],
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
