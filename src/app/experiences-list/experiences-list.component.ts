import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css']
})
export class ExperiencesListComponent implements OnInit {

  /**
   * @input experiencesList - Experience passed to us
   */
  @Input() experiences: Experience[];

  @Output() onExperienceSelected: EventEmitter<Experience>;

  private currentExperience: Experience;

  constructor() { 
    this.onExperienceSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(experience: Experience): void {
    this.currentExperience = experience;
    this.onExperienceSelected.emit(experience);
  }

  isSelected(experience: Experience): boolean {
    if(!experience || !this.currentExperience) {
      return false;
    }
    return experience.id === this.currentExperience.id;
  }
}