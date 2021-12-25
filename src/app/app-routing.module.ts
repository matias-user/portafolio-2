import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './shared/curriculum/curriculum.component';

const routes: Routes = [
  {
    path: 'curriculum', component: CurriculumComponent
  },
  { 
    path:'',
    loadChildren: () => import('../app/pages/pages.module').then( m => m.PagesModule )
  },
  {
    path: '**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
