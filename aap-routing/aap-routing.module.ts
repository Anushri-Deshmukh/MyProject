import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlComponent } from '../html/html.component';
import { CssComponent } from '../css/css.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { BootstrapComponent } from '../bootstrap/bootstrap.component';
import { JqueryComponent } from '../jquery/jquery.component';
import { MongodbComponent } from '../mongodb/mongodb.component';
import { NodejsComponent } from '../nodejs/nodejs.component';
import { AngularComponent } from '../angular/angular.component';

const routes:Routes=[
  {path:'html', component:HtmlComponent},
  {path:'css', component:CssComponent},
  {path:'javascript', component:JavascriptComponent},
  {path:'bootstrap', component:BootstrapComponent},
  {path:'jquery', component:JqueryComponent},
  {path:'mongodb', component:MongodbComponent},
  {path:'nodejs', component:NodejsComponent},
  {path:'angular', component:AngularComponent}
];

@NgModule({
  imports: [RouterModule .forRoot(routes)],
  exports:[RouterModule]
})
export class AapRoutingModule { }
