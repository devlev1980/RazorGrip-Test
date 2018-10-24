import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Feed} from '../models/feed';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  feed: Feed;
  randomImage;
  date: string;
  author: string;
  desc;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.getImageFromFlickr();
    }, 5000);
  }

  refreshImage() {
    this.getImageFromFlickr();
  }

  getImageFromFlickr() {
    this.apiService.getFeed().subscribe(data => {
      this.feed = data as Feed;
      this.feed.items.forEach(item => {
        // this.randomImage = this.feed.items[Math.floor(Math.random() * this.feed.items.length)].media.m;
        this.date = item.date_taken;
        this.author = item.author;
         this.desc = item.description;
      });
    });
  }

}
