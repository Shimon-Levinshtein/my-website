import { Component, OnInit } from '@angular/core';
import { skillsDevelop } from './skillsData';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  skillsData: Array<any> = skillsDevelop;
  constructor() { }

  ngOnInit(): void {
  }

}
