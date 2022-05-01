import { Component, OnInit } from '@angular/core';
import { projectsData } from './projectsData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData: Array<any> = projectsData;

  constructor() { }

  ngOnInit(): void {
  }

  onClickProjact( url: string) {
    window.open(url, '_blank');
  }

}
