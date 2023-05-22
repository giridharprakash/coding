import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Theme} from "../models/theme";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private selectedTheme: BehaviorSubject<Theme | null> = new BehaviorSubject<Theme | null>(null);
  private allThemes: BehaviorSubject<Array<Theme>> = new BehaviorSubject<Array<Theme>>([]);
  themes = this.allThemes.asObservable();
  currentTheme = this.selectedTheme?.asObservable();
  url: string = 'http://localhost:3000/api/themes'

  constructor(private httpClient: HttpClient) {
  }

  loadImages(): void {
    this.httpClient.get<Array<Theme>>(this.url).subscribe(themes => {
      console.log(themes);
      this.allThemes.next(themes);
    });
  }

  setCurrentTheme(theme: Theme) {
    console.log(theme);
    this.selectedTheme.next(theme);
  }
}
