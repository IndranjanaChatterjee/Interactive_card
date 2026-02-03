import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Colorfulcard } from './components/colorfulcard/colorfulcard';
import { GrayCard } from './components/gray-card/gray-card';
import { Form } from './components/form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Colorfulcard,GrayCard,Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Interactive_card');
}
