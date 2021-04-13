import { Component, OnInit } from '@angular/core';
import { ApiService, Copy } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  url: string;

  copies: Copy[] = [];
  showError = false;
  fetching = false;

  constructor(
    private api: ApiService,
    private http: HttpService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const userId = this.localStorageService.getItem('userId');
    const authToken = this.localStorageService.getItem('authToken');
    if (userId && authToken) {
      this.http.getCopies(authToken).subscribe((copies: Copy[]) => {
        if (!copies) {
          return;
        }
        this.copies = copies.filter((obj: Copy) => obj.userId === userId);
      });
    }
  }

  shortenIt(form: NgForm): void {
    this.showError = false;
    this.fetching = true;

    this.api.getShorten(this.url).subscribe(
      (copy: Copy) => {
        this.copies.unshift(copy);
        const userId = this.localStorageService.getItem('userId');

        this.fetching = false;
        if (userId) {
          this.http.saveCopy({ ...copy, userId });
        }
      },
      () => {
        this.fetching = false;
        this.showError = true;
      }
    );
    form.controls.shortenInput.reset();
  }
}
