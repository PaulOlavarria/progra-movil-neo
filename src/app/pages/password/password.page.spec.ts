import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';


import { PasswordPage } from './password.page';

describe('PasswordPage', () => {

  const storageRef = {
    userData: jasmine.createSpy(undefined)
  };
  let component: PasswordPage;
  let fixture: ComponentFixture<PasswordPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordPage ],
      providers: [
        {
          provide: Storage,
          useValue: storageRef
        }],
      imports: [RouterTestingModule, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
