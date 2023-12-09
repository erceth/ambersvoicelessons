import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle(`Amber's Voice Lessons | Bluffdale, Utah`);
    this.meta.updateTag({ name: 'description', content: `Train your voice to sing many styles of music with Amber's Voice Lessons. Want to sing in a choir, in a karaoke bar or in musical theater? I enjoy teaching you to sing in the style of your choice.`});
  }

  ngOnInit() {
  }



}
