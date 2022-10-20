// import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalculatorResponse } from './CalculatorResponse'

@Component({
  selector: 'app-newcal',
  templateUrl: './newcal.component.html',
  styleUrls: ['./newcal.component.css']
})
export class Calculatordemo implements OnInit {

  public num1: number
  public num2: number
  public result: number
  public num4: number

  constructor(

  ) { }
  ngOnInit(): void {
  }
  public add() {
    this.result = this.num1 + this.num2;
  }
  public avg() {
    this.result = (this.num1 + this.num2 + this.num4) / 3;
  }
  sub() {
    this.result = this.num1 - this.num2;
  }
  mul() {
    this.result = this.num1 * this.num2;
  }
  div() {
    this.result = this.num1 / this.num2;
  }
}