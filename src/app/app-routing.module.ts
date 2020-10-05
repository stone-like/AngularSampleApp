import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';
import { AccountModule } from './account/account.module';
import { TodosearchComponent } from './todo/todosearch/todosearch.component';

const routes: Routes = [
  { path: 'redirect', redirectTo: '', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(m => m.AccountModule)
  },
  { path: 'search', component: TodosearchComponent },
  { path: '', component: TodoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AccountModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
