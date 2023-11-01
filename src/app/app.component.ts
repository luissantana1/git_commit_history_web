import { Component, OnInit } from '@angular/core';
import { Services } from "./services/services"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private httpServices: Services) {}
  
  githubData: any;

  ngOnInit(): void {
    this.httpServices.getGithubData().then( (response) => {
      this.githubData = response;
      this.githubData.reverse();
    });
  }
}