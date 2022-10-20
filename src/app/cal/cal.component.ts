import { Component, OnInit, ViewChild } from '@angular/core';
import { CalculatorResponse } from './resultresponse';
@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  public num1: number;
  public num2: number;
  public num3: number;
  public returnValue: number;
  public Result: CalculatorResponse;
  constructor() {
    this.Result = new CalculatorResponse();
  }
  ngOnInit(): void {
  }
  public divide() {
    this.Result = new CalculatorResponse();
    let divideOperationResponse: CalculatorResponse = new CalculatorResponse();

    if (this.num2 != 0) {
      let returnValue = this.num1 / this.num2;
      divideOperationResponse.isSuccess = true;
      divideOperationResponse.returnValue = returnValue;
      divideOperationResponse.responseText = "success";
    }
    else {
      divideOperationResponse.isSuccess = false;
      divideOperationResponse.returnValue = 0;
      divideOperationResponse.responseText = "cannot divide by zero !!";
    }
    this.Result = divideOperationResponse;
  }//public divide(num1:number, num2:number): CalculatorResponse

  public add() {
    this.Result = new CalculatorResponse();
    let addOperationResponse: CalculatorResponse = new CalculatorResponse();

    if (this.num2 >= 0) {
      let returnValue = this.num1 + this.num2;
      addOperationResponse.isSuccess = true;
      addOperationResponse.returnValue = returnValue;
      addOperationResponse.responseText = "success";
    }
    else {
      addOperationResponse.isSuccess = false;
      addOperationResponse.returnValue = 0;
      addOperationResponse.responseText = "Please enter valid number !! !!";
    }
    this.Result = addOperationResponse;
  }
  public mul() {
    this.Result = new CalculatorResponse();
    let mulOperationResponse: CalculatorResponse = new CalculatorResponse();

    if (this.num2 >= 0) {
      let returnValue = this.num1 * this.num2;
      mulOperationResponse.isSuccess = true;
      mulOperationResponse.returnValue = returnValue;
      mulOperationResponse.responseText = "success";
    }
    else {
      mulOperationResponse.isSuccess = false;
      mulOperationResponse.returnValue = 0;
      mulOperationResponse.responseText = "Please enter valid number !!";
    }
    this.Result = mulOperationResponse;
  }
  public sub() {
    this.Result = new CalculatorResponse();
    let subOperationResponse: CalculatorResponse = new CalculatorResponse();


    if (this.num2 != 0) {
      let returnValue = this.num1 - this.num2;
      subOperationResponse.isSuccess = true;
      subOperationResponse.returnValue = returnValue;
      subOperationResponse.responseText = "success";
    }
    else {
      subOperationResponse.isSuccess = false;
      subOperationResponse.returnValue = 0;
      subOperationResponse.responseText = "Please enter valid number !! !!";
    }
    this.Result = subOperationResponse;
  }
  public avg() {
    this.Result = new CalculatorResponse();
    let avgOperationResponse: CalculatorResponse = new CalculatorResponse();

    if (this.num2 >= 0) {
      let returnValue = (this.num1 + this.num2 + this.num3) / 3;
      avgOperationResponse.isSuccess = true;
      avgOperationResponse.returnValue = returnValue;
      avgOperationResponse.responseText = "success";
    }
    else {
      avgOperationResponse.isSuccess = false;
      avgOperationResponse.returnValue = 0;
      avgOperationResponse.responseText = "Please enter valid number !!";
    }
    this.Result = avgOperationResponse;
  }
  public reset() {
    this.num1 = null
    this.num2 = null
    this.num3 = null
    this.Result.returnValue = null
    this.Result.responseText = null
  }
}
