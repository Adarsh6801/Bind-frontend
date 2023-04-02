import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { MentorModule } from './mentor/mentor.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AnimateModule } from 'primeng/animate';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    AuthModule,
    UserModule,
    MentorModule,
    AdminModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    AnimateModule
    
    ],
  providers: [
    AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
