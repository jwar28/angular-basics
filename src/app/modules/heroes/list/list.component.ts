import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Dr. Strange', 'Black Panther'];
  fallenHero: string = "";

  deleteHeroe() {
    this.fallenHero = this.heroes.pop() || "";
  }
}
