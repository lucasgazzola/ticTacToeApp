import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button>
    {{ value }}
  </button>`,
  styles: ['button{font-size: 48px; font-weight: bold; width: 100%; height: 100%}']
})

export class SquareComponent {
  @Input() value!: 'X' | 'O';
}


