import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public value: string = "";
  public result: string = "0";
  public buttons: string[] = ['1','2','3','4','5','6','7','8','9','+','0','-','/','*','='];

  constructor() { }

  ngOnInit(): void {
  }

  addData(data:string): void {
    let validate = this.value[this.value.length - 1];
    let dt = ["+", "-", "*", "/", "="];
    let flag = false;

    if (validate == "+" || validate == "-" || validate == "*" || validate == "/") {
      for(let i = 0; i < dt.length; i++){
        if(data == dt[i]){
          flag = true;
        }
      }
    }

    if(!flag){
      if(data == '=' && this.value.trim() != ""){
        this.result = eval(eval(this.value) + eval(this.result));
        this.value = "";
      } else {
        this.value += data
      }
    }
  }

}
