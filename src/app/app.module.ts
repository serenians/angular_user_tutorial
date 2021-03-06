import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule, RoutedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './service/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoutedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    {
      multi: true,
      useClass: HttpInterceptorService,
      provide: HTTP_INTERCEPTORS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
