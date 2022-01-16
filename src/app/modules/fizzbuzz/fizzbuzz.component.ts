import { Component, OnInit } from '@angular/core';
import { IFizzBuzz } from './models/fizzbuzz.model';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss']
})
export class FizzbuzzComponent implements OnInit {

  defaultEndNumber = 100;

  fizzbuzz: IFizzBuzz;
  fizzBuzzResults: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getEndNumber() {
    return this.defaultEndNumber;
  }

  // Generate random number on click between default end number plus 20
  buttonClick() {
    this.fizzBuzzResults = "";
    this.fizzbuzz= { endNumber: this.getEndNumber(), startNumber: Math.floor(Math.random() * this.defaultEndNumber + 20)};
    this.startFizzBuzz();
  }

  startFizzBuzz() {

    if ( this.fizzbuzz.startNumber && this.fizzbuzz.endNumber && this.fizzbuzz.startNumber >= this.fizzbuzz.endNumber ) {
      this.fizzBuzzResults = "The starting number must be smaller than the end number! Start: " + this.fizzbuzz.startNumber + " End: " + this.fizzbuzz.endNumber;
    } else {

      for (let i = this.fizzbuzz.startNumber; i < this.fizzbuzz.endNumber; i++) {
        if (i % 15 === 0) {
          this.fizzBuzzResults = this.fizzBuzzResults.concat('fizzbuzz, ');
        }else if (i % 3 === 0) {
          this.fizzBuzzResults = this.fizzBuzzResults.concat('fizz, ');
        } else if (i % 5 === 0) {
          this.fizzBuzzResults = this.fizzBuzzResults.concat('buzz, ');
        } else {
          this.fizzBuzzResults = this.fizzBuzzResults.concat(i + ' ,');
        }
      }
      
    }

  }



}
