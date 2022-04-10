import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySkillsComponent } from './my-skills/my-skills.component';

const routes: Routes = [
  { path: 'my-skills', component: MySkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
