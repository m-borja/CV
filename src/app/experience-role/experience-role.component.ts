import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-role',
  templateUrl: './experience-role.component.html',
  styleUrls: ['./experience-role.component.css']
})
export class ExperienceRoleComponent implements OnInit {

  @Input() role: String;

  constructor() { }

  ngOnInit() {
  }

}