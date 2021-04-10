import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css'],
})
export class CopyComponent implements OnInit {
  @Input() originalLink: string;
  @Input() shortenedLink: string;
  copied = false;
  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {}

  copyToClipboard(): void {
    this.copied = true;
    this.clipboard.copy(this.shortenedLink);
  }
}
