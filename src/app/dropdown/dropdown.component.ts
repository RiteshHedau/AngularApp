import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
 

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgbModule,RouterLink,HomeComponent,AboutComponent,ServiceComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

}
