import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageList: string[] = ['necklace', 'ring', 'moonstone'];
  
  constructor() { }

  handleClick() {

  }
  ngOnInit(): void {
  }
}
