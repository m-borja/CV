import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-experience-image',
  templateUrl: './experience-image.component.html',
  styleUrls: ['./experience-image.component.css']
})
export class ExperienceImageComponent implements OnInit {

  @Input() experience: Experience;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}
