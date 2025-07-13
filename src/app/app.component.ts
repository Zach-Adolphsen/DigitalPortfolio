import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './Components/footer-bar/footer-bar.component';
import { ProjectsComponent } from './Pages/projectsPage/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, FooterBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'digitalPortfolio';
}
