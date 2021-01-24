import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() ns: number[] = [];

  addNumber(n: number) {
    console.log(n);
    console.log(this.ns);
    this.ns.push(n);
  }
}
