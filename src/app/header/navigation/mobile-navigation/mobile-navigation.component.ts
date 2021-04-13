import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.css'],
})
export class MobileNavigationComponent implements OnInit {
  @Output() toggleOff = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {}

  public get id(): string {
    return this.localStorage.getItem('userId');
  }

  onLogIn(): void {
    this.router.navigate(['./login']);
  }

  onSignUp(): void {
    this.router.navigate(['./sign-up']);
  }

  onLogOut(): void {
    this.localStorage.deleteAllItems();
    this.router.navigate(['./login']);

  }

  onNavigate(): void {
    this.toggleOff.emit(false);
  }
}
