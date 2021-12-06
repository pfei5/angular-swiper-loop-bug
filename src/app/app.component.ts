import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper, { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

Swiper.use([Autoplay, Pagination]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public slides$ = new BehaviorSubject<string[]>([]);
  public swiperConfig: SwiperOptions = {
    pagination: true,
    speed: 500,
    spaceBetween: 16,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  };
  @ViewChild('swiper', { static: false }) public swiper?: SwiperComponent;
  private _urls = [
    '/assets/images/img1.jpeg',
    '/assets/images/img2.jpeg',
    '/assets/images/img3.jpeg',
  ];

  ngOnInit(): void {
    this.slides$.next(this._urls);
    setTimeout(() => {
      this.slides$.next([this._urls[0]]);
      this.swiper?.swiperRef?.update();
    }, 5000);
  }

  trackBySlide(index: number, slide: string) {
    return index;
  }
}
