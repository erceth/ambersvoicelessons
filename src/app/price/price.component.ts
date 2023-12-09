import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle(`Amber's Voice Lessons - Price | Bluffdale, Utah`)
    this.meta.updateTag({ name: 'description', content: `Cost for Amber's Voice Lessons.`});
  }

  ngOnInit() {
  }

}
