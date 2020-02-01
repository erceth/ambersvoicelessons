import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle(`Amber's Voice Lessons - About | Draper, Lehi, Eagle Mountain, Utah`)
    this.meta.updateTag({ name: 'description', content: `Amber has been singing for as long as she can remember. She has performed in plays at Hale Center Theater Orem and Center Point. She was in the BYU Women's Chorus and BYU Jazz Voices.`});
  }

  ngOnInit() {
  }

}
