import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Theme} from "../models/theme";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.scss']
})
export class ImageThumbnailComponent implements OnInit, OnChanges{
  @Input() currentPage: number = 1;
  sizeOfThemes: number = 4;
  currentThemes: Array<Theme> = [];
  themes: Array<Theme> = [];
  selectedTheme: Theme | null = null;

  constructor(public imageService: ImageService) {
  }
  ngOnInit(): void {
    this.imageService.themes.subscribe(t => {
      this.themes = t;
      this.renderComponent();
    });
  }

  selectCurrentTheme(theme: Theme) {
    this.selectedTheme = theme;
    this.imageService.setCurrentTheme(theme);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderComponent();
  }

  private renderComponent() {
    const index = (this.currentPage - 1) * this.sizeOfThemes;
    this.currentThemes = this.themes?.slice(index, index + this.sizeOfThemes) ?? [];
    if (this.currentThemes.length)
      this.selectCurrentTheme(this.currentThemes[0]);
  }

  getUrl(theme: Theme): string {
    return`http://localhost:3000/images/${theme.thumbnail}`;
  }
}
