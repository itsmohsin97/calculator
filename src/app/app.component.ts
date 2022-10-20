import { Component, } from '@angular/core';
import { CalculatorResponse } from './cal/resultresponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'calculator';
}
  

  // public num1: number;
  // public num2: number;
  // public returnValue: number;

  // // public responseText;
  // // public isSuccess: boolean
  // public divideOperationResponse;
  // ngOnInit() {
  // }
  // // divideOperationResponse: CalculatorResponse;
  // public divide(num1: number, num2: number): CalculatorResponse {
  //   // let divideOperationResponse: CalculatorResponse = new CalculatorResponse();
  //   let divideOperationResponse: CalculatorResponse = new CalculatorResponse();
  //       if (num2 != 0) {
  //           let returnValue = num1 / num2;
  //           divideOperationResponse.isSuccess = true;
  //           divideOperationResponse.returnValue = returnValue;
  //           divideOperationResponse.responseText = "success";
  //       }
  //       else {
  //           divideOperationResponse.isSuccess = false;
  //           divideOperationResponse.returnValue = 0;
  //           console.log(divideOperationResponse.responseText = "cannot divide by zero !!");
  //       }
  //       return divideOperationResponse;
  //public divide(num1:number, num2:number): CalculatorResponse

// 
