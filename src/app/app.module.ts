import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { DBTaskService } from './services/dbtask/dbtask.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthenticationService } from './services/authentication/authentication.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,BrowserAnimationsModule,
    HttpClientModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    DBTaskService,
    AuthGuardService,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },QRScanner],
  bootstrap: [AppComponent]
})
export class AppModule {}
