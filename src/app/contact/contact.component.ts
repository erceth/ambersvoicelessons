import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle(`Amber's Voice Lessons - Contact | Bluffdale, Utah`);
    this.meta.updateTag({ name: 'description', content: `Set up a Voice Lesson by submitting a new student survey on my website or send me a message on Facebook.`});
  }

  ngOnInit() {
  }

}
