import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SupervisorSystemComponent } from './supervisor-system/supervisor-system.component';
import { SalespersonSystemComponent } from './salesperson-system/salesperson-system.component';
import { AccountingSystemComponent } from './accounting-system/accounting-system.component';
import { AdminSystemComponent } from './admin-system/admin-system.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { MatSelectModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SupervisorSystemComponent,
    SalespersonSystemComponent,
    AccountingSystemComponent,
    AdminSystemComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'sales-home', component: SalespersonSystemComponent},
      { path: 'accounting-home', component: AccountingSystemComponent},
      { path: 'supervisor-home', component: SupervisorSystemComponent},
      { path: 'admin-home', component: AdminSystemComponent}
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
