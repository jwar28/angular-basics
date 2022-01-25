import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name: string = 'Iron Man';
  age : number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeNameToDocStrange(): void {
    this.name = 'Dr. Strange';
  }

  changeAgeToDocStrangeAge(): void {
    this.age = 40;
  }
}
