import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../Components/project-card/project-card.component';
import { ProjectInformation } from '../../project-information';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: ProjectInformation[] = [
    {
      title: 'War - Card Game',
      description: 'Using Java, I made the card game War',
      url: 'https://github.com/Zach-Adolphsen/WarGame',
    },
    {
      title: 'Personal Website',
      description:
        'This personal website is made with Angular, Typescript, HTML, CSS, and Bootstrap',
      url: '&{this.baseUrl}',
    },
    {
      title: 'More Projects to Come!',
      description: 'I am always updating my github with new projects',
      url: 'https://github.com/Zach-Adolphsen',
    },
  ];
}
