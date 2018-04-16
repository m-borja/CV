import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-experience-row',
  templateUrl: './experience-row.component.html',
  styleUrls: ['./experience-row.component.css']
})
export class ExperienceRowComponent implements OnInit {

  @Input() experience: Experience;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
