import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  estudiantes = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  addStudent(){
    let estudiante:string = (document.getElementById("estudiante") as HTMLInputElement).value;
    let nota:number = parseFloat((document.getElementById("nota") as HTMLInputElement).value);
    let edad:number = parseInt((document.getElementById("edad") as HTMLInputElement).value);

    if (estudiante == "" || !nota || !edad) {
      alert("Ingrese todos los campos y verifica que la información es correcta")
    } else {
      this.estudiantes.push({
        "nombre": estudiante,
        "nota": nota,
        "edad": edad
      });

      (document.getElementById("estudiante") as HTMLInputElement).value = "";
      (document.getElementById("nota") as HTMLInputElement).value = "";
      (document.getElementById("edad") as HTMLInputElement).value = "";
    }
  }
}
