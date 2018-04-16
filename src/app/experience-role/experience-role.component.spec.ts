import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceRoleComponent } from './experience-role.component';

describe('ExperienceRoleComponent', () => {
  let component: ExperienceRoleComponent;
  let fixture: ComponentFixture<ExperienceRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
