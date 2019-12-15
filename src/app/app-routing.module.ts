import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PostUpdComponent } from './components/posts/post-upd/post-upd.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", component: PostListComponent},
  {path: "addpost", component: PostAddComponent},
  {path: "updpost" , component: PostUpdComponent},
  {path: "login" , component: LoginComponent},
  {path: "register" , component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
