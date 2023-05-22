import {Component, Input, OnInit} from '@angular/core';
import {Theme} from "../models/theme";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent implements OnInit {
  public currentTheme: Theme | null = null;
  public url = '';

  constructor(public imageService: ImageService) {
  }

  ngOnInit(): void {
    this.imageService.currentTheme?.subscribe(t => {
      this.currentTheme = t;
      if (t)
        this.url = `http://localhost:3000/images/${t.image}`;
    });
  }
}
