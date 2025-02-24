import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageList: string[] = ['necklace', 'ring'];
  
  constructor() { }

  ngOnInit(): void {
  }
}
