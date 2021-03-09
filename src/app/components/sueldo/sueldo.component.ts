import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent implements OnInit {

  data = [
    {
        "Nombre":"juan1",
        "Apellido":"Perez1",
        "Sueldo":"120001"

    },
    {
        "Nombre":"sebas1",
        "Apellido":"Perez",
        "Sueldo":"120002"

    },
    {
        "Nombre":"juan3",
        "Apellido":"morales2",
        "Sueldo":"102"

    },
    {
        "Nombre":"juan3",
        "Apellido":"Perez3",
        "Sueldo":"120003"

    },
    {
        "Nombre":"jua4",
        "Apellido":"Perez4",
        "Sueldo":"120004"

    },
    {
        "Nombre":"juan5",
        "Apellido":"Perez5",
        "Sueldo":"120005"

    }, {
        "Nombre":"juan6",
        "Apellido":"Perez6",
        "Sueldo":"1200066"

    }, {
        "Nombre":"juan67",
        "Apellido":"Perez7",
        "Sueldo":"120007"

    },
    {
        "Nombre":"juan8",
        "Apellido":"Perez8",
        "Sueldo":"120008"

    },
    {
        "Nombre":"juan9",
        "Apellido":"Pere9z",
        "Sueldo":"120009"

    },
    {
        "Nombre":"juan0",
        "Apellido":"Perez9",
        "Sueldo":"120009"

    }, {
        "Nombre":"juan9",
        "Apellido":"Perez9",
        "Sueldo":"120009"

    }, {
        "Nombre":"juan89",
        "Apellido":"Perez87",
        "Sueldo":"17000"

    }, {
        "Nombre":"juan12",
        "Apellido":"Perez12",
        "Sueldo":"1200012"

    },
    {
        "Nombre":"juan13",
        "Apellido":"Perez13",
        "Sueldo":"1200013"

    }, {
        "Nombre":"juan113",
        "Apellido":"Pere1z",
        "Sueldo":"1200032"

    },
    {
        "Nombre":"juan32",
        "Apellido":"Perez23",
        "Sueldo":"1200023"

    },
    {
        "Nombre":"juan43",
        "Apellido":"Pere3z",
        "Sueldo":"120005"

    }, {
        "Nombre":"juan54",
        "Apellido":"Perez4534",
        "Sueldo":"1200043"

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
