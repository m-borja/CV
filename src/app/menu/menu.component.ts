import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    this.items = [];
  }

}