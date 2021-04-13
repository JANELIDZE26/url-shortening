import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-desktop-navigation',
  templateUrl: './desktop-navigation.component.html',
  styleUrls: ['./desktop-navigation.component.css'],
})
export class DesktopNavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  public get id(): string {
    return this.localStorageService.getItem('userId');
  }

  ngOnInit(): void {}

  onLogIn(): void {
    this.router.navigate(['./login']);
  }

  onSignUp(): void {
    this.router.navigate(['./sign-up']);
  }

  onLogOut(): void {
    this.localStorageService.deleteAllItems();
    this.router.navigate(['./login']);
  }
}
