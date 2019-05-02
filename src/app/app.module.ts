import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
// import { HttpModule } from '@angular/http';
import { HttpModule, Http } from '@angular/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

// import { A11yModule } from '@angular/cdk/a11y';
// import { BidiModule } from '@angular/cdk/bidi';
// import { ObserversModule } from '@angular/cdk/observers';
// import { OverlayModule } from '@angular/cdk/overlay';
// import { PlatformModule } from '@angular/cdk/platform';
// import { PortalModule } from '@angular/cdk/portal';
// import { ScrollDispatchModule } from '@angular/cdk/scrolling';
// import { CdkStepperModule } from '@angular/cdk/stepper';
// import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, ReactiveFormsModule, NgxWebstorageModule.forRoot(),
    MaterialModule, FlexLayoutModule, BrowserAnimationsModule, HttpModule,
    MaterialModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// @NgModule({
//   imports:      [ 
//     BrowserModule,
//     FormsModule,
//     BrowserAnimationsModule,
//     HttpModule,
//     ReactiveFormsModule, 
//     FlexLayoutModule,
//     MaterialModule ],
//   declarations: [ AppComponent, HelloComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }



/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule, 
    FlexLayoutModule,
    MaterialModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
*/



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';

// @NgModule({
//   imports:      [ BrowserModule, FormsModule ],
//   declarations: [ AppComponent, HelloComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
