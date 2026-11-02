import { Component } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
    displayValue: string = '0';

    //Appends a number or operator to the screen
    appendValue(value: string): void{
      if(this.displayValue === '0' && !isNaN(Number(value))){
        this.displayValue = value;
      }else{
        this.displayValue += value;
      }
    }

    //clears the display screen
    clearDisplay(): void{
      this.displayValue = '0';
    }

    //Evaluates the mathematical expression
    calculateResult(): void{
      try{
        //Using Function evaluation as a safe baseline calculation mechanism
        const result = new Function(`return ${this.displayValue}`)();
        this.displayValue = String(result);
      }catch(error){
        this.displayValue = 'Error';
      }
    }
}
