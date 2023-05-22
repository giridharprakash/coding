import {Component, OnInit} from '@angular/core';
import {ImageService} from "./services/image.service";
import {Theme} from "./models/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'slider-app';
  currentPage = 1;
  totalPages = 0;
  sizeOfThemes: number = 4;
  themes: Array<Theme> = [];
  constructor(public imageService: ImageService) {
  }

  currentPageChanged(currentPage: number) {
    this.currentPage = currentPage;
  }

  ngOnInit(): void {
    this.imageService.loadImages();
    this.imageService.themes.subscribe(t => {
      this.themes = t
      this.totalPages = Math.ceil(this.themes.length / this.sizeOfThemes);
    });
  }
}
