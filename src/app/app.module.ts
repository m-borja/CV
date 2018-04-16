import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import ngx-translate and the http loader
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Components
import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

//PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DataViewModule } from 'primeng/dataview';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { ExperienceRowComponent } from './experience-row/experience-row.component';
import { ExperienceImageComponent } from './experience-image/experience-image.component';
import { ExperienceCategoryComponent } from './experience-category/experience-category.component';
import { ExperienceRoleComponent } from './experience-role/experience-role.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    ExperiencesListComponent,
    ExperienceRowComponent,
    ExperienceImageComponent,
    ExperienceCategoryComponent,
    ExperienceRoleComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    DataViewModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}