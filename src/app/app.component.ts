import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Standard tabs demo
  tabs = [
    {
      label: 'Objective',
      objective: true
    }, {
      label: 'Summary',
      summary:true
    }, {
      label: 'Skills',
      skills: true,
    }, {
      label: 'Education',
      education:true
    },
    {
      label: 'Experience-1',
      experience1:true
    },
    {
      label: 'Experience-2',
      experience2:true
    },
    {
      label:'Personal',
      personal: true
    }
  ];

  

  constructor() {
  
    }

    // Initialize the index by checking if a tab link is contained in the url.
    // This is not an ideal check and can be removed if routerLink exposes if it is active.
    // https://github.com/angular/angular/pull/12525
    

 
  }