import { Component, OnInit } from '@angular/core';
import { ApiService, Copy } from '../services/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  url: string;
  copies: Copy[] = [];
  showNowLinks = true;
  showError = false;
  fetching = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  shortenIt(form: NgForm): void {
    this.showNowLinks = false;
    this.showError = false;
    this.fetching = true;
    this.api.getShorten(this.url).subscribe((copy: Copy) => {
      this.copies.unshift(copy);
      this.fetching = false;
    }, () => {
      this.fetching = false;
      this.showError = true;
    });
    form.controls.shortenInput.reset();
  }
}
