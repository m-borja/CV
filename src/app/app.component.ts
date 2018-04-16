import { Component } from '@angular/core';
import { Experience } from './model/experience';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public experiences: Experience[];

  title = 'CV Marouan Borja';

  constructor() {

    this.experiences = [];
    
    let exp1 = new Experience(
      1, 2013, "Stage de fin d'études", "Développeur stagiaire", 
      "/assets/images/experiences/fontanel.jpg", ["Entreprise", "Service", "Développeur"]);
    
    let exp2 = new Experience(
      1, 2013, "Mission en régie", "Développeur", 
      "/assets/images/experiences/segeco.jpg", ["Entreprise", "Service", "Développeur"]);

    this.experiences.push(exp1);
    this.experiences.push(exp2);
  }
}