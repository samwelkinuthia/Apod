import { Component, OnInit } from '@angular/core';
import { ApodService } from '../services/apod.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  data: any;

  constructor(private apodService: ApodService) {

    this.apodService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  ngOnInit() {
  }

}
