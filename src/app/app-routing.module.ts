import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { AdminPanel } from "./components/AdminPanel"
import { UserPanel } from "./components/UserPanel"
import { ModalWindow } from './components/ModalWindow';

const routes: Route[] = [
  {
    path: 'adminpanel',
    component: AdminPanel
  },
  {
    path: 'userpanel',
    component: UserPanel
  },
  {
    path: "**",
    redirectTo: "userpanel"
  }

];


@NgModule({
  declarations:[ AdminPanel, UserPanel, ModalWindow],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AdminPanel, UserPanel]
})
export class AppRoutingModule { }
