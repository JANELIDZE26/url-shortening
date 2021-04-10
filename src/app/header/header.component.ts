import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  showNav = false;

  ngOnInit(): void {}
}
