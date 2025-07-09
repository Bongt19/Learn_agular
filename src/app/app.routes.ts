import { Routes } from '@angular/router';
import { DetailDemo } from './share/detail/detail.component';
import { UserListDemo } from './share/ListDemo/userList.component';

export const routes: Routes = [
    {path: '', component: UserListDemo },
    {path: 'detail/:id', component: DetailDemo }
];
