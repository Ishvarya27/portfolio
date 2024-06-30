import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  achievements = [
    {
      image: '../assets/achievement1.jpg',
      description: 'Topper in 3rd and 4th semesters of CSE Dept for the academic year 2022-2023! 🏆'
    },
    {
      image: '../assets/achievement2.jpg',
      description: 'Image Stitching Enhanced Mobile Surveillance System has been officially registered for a UK Design Patent.'
    },
    {
      image: '../assets/achievement3.jpg',
      description: "Joint Treasurer of the Coders Club at Thiagarajar College of Engineering since October 2023."
    }
    // Add more achievements as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
