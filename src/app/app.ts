import { Component } from '@angular/core';
import { Home } from '../home/home';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
})
export class App {
  title = 'homes';
}
