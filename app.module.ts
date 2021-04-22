import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AapRoutingModule } from './aap-routing/aap-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AngularComponent } from './angular/angular.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    BootstrapComponent,
    JqueryComponent,
    AngularComponent,
    MongodbComponent,
    NodejsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AapRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
