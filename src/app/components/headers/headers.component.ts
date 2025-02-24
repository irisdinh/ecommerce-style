import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-headers',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {
  constructor() { }

  ngOnInit(): void {
  }
}
