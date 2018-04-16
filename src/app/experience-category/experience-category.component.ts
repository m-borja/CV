import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-experience-category',
  templateUrl: './experience-category.component.html',
  styleUrls: ['./experience-category.component.css']
})
export class ExperienceCategoryComponent implements OnInit {

  @Input() experience: Experience;

  constructor() { }

  ngOnInit() {
  }

}