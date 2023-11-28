import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private authService: AuthenticationService) {
  this.authService.getAllUsers().subscribe((users)=>console.log(users))
 }
}
