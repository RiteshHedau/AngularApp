import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,ServiceComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
