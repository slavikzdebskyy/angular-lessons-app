import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

  // Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
  //  Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
