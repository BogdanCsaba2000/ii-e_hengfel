/*
* File: app.component.ts
* Author: Bogdán Csaba Rómeó
* Copyright: 2024, Bogdán Csaba Rómeó
* Group: SzoftII/E
* Date: 2024.12.11
* Github: https://github.com/BogdanCsaba2000
* Licenc: MIT
*/


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HengfelComponent } from './hengfel/hengfel.component';

@Component({
  selector: 'app-root',
  imports: [ HengfelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hengfel';
}
