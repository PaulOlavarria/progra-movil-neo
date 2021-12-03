import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Storage } from '@ionic/storage';


import { HomePage } from './home.page';

describe('HomePage', () => {

  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  const storage = { get: () => 'pau'};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [QRScanner, {
        provide: Storage,
        useValue: storage
      }],
      imports: [RouterTestingModule, IonicModule.forRoot(),]
    }).compileComponents();


    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
