import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './Pages/contactPage/contact.component';
import { ProjectsComponent } from './Pages/projectsPage/projects.component';
import { IntroductionComponent } from './Pages/introductionPage/introduction.component';

export const routes: Routes = [
  {
    path: '/home',
    component: AppComponent,
  },
  {
    redirectTo: '/introduction',
    component: IntroductionComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contactMe',
    component: ContactComponent,
  },
];
