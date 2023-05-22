import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageThumbnailComponent } from './image-thumbnail.component';

describe('ImageThumbnailComponent', () => {
  let component: ImageThumbnailComponent;
  let fixture: ComponentFixture<ImageThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageThumbnailComponent]
    });
    fixture = TestBed.createComponent(ImageThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
