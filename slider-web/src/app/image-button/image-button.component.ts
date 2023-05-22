import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from "../models/theme";

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent implements OnInit {
  currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() currentPageEvent = new EventEmitter<number>();

  btnPrevClick() {
    if (this.currentPage > 1) {
      --this.currentPage;
      this.currentPageEvent.emit(this.currentPage);
    }
  }

  btnPostClick() {
    if (this.currentPage == this.totalPages)
      return;
    ++this.currentPage;
    this.currentPageEvent.emit(this.currentPage);
  }

  ngOnInit(): void {
  }
}
