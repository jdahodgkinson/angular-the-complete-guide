import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  paragraphVisible = false;
  timestamps = [];

  toggleParagraph(): void {
    this.paragraphVisible = !this.paragraphVisible;
    const date = new Date();
    this.timestamps.push(date);
  }

  constructor() { }

  ngOnInit(): void { }

}
