import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollFormComponent } from './PollForm/poll-form/poll-form.component';


const routes: Routes = [
  {
    path:"poll-form" , component : PollFormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
