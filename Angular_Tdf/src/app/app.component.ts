import { Component } from '@angular/core';
import { User } from './Models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','vue'];
  userModel = new User('rob','a@a.com',12123,'Angular','morning',true);
}
