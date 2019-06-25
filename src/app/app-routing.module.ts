import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserNewComponent } from './component/user-new/user-new.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'user-new', component: UserNewComponent},
  {path: 'user-list', component: UserListComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [HomeComponent, UserNewComponent, UserListComponent, NotFoundComponent]
