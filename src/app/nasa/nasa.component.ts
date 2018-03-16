import { Component, OnInit } from '@angular/core';
import { ApodService } from '../services/apod.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  constructor(private apodService: ApodService) {
    console.log('Im workin');

    this.apodService.getData().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
