import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor(private titleService: Title ) {
    this.titleService.setTitle(`Amber's Voice Lessons - Price - Draper, Lehi, Eagle Mountain`)
  }

  ngOnInit() {
  }

}
