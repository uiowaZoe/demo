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
import { MatSelectModule, MatDividerModule, MatAutocompleteModule, MatTabsModule, MatTableModule} from '@angular/material';
import { SalesAddComponent } from './salesperson-system/sales-add/sales-add.component';
import { SalesSearchComponent } from './salesperson-system/sales-search/sales-search.component';

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
    SalesAddComponent,
    SalesSearchComponent,
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
    MatDividerModule,
    MatAutocompleteModule,
    MatTabsModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
