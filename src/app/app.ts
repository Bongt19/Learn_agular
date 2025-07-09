import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListDemo } from "./share/ListDemo/userList.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
