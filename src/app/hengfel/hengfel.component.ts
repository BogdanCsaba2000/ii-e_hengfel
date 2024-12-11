/*
* File: hengfel.component.ts
* Author: Bogdán Csaba Rómeó
* Copyright: 2024, Bogdán Csaba Rómeó
* Group: SzoftII/E
* Date: 2024.12.11
* Github: https://github.com/BogdanCsaba2000
* Licenc: MIT
*/



import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hengfel',
  imports: [FormsModule, FormsModule],
  templateUrl: './hengfel.component.html',
  styleUrl: './hengfel.component.css'
})
export class HengfelComponent {

  r !: number;
  h !: number;
  area !:number;



  startCalc(){

    //s = 2pir(r+h);

    const rh = this.r + this.h;

   this.area = 2*Math.PI*this.r * rh;

  }

}
