import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicecorporal',
  templateUrl: './indicecorporal.component.html',
  styleUrls: ['./indicecorporal.component.css']
})
export class IndicecorporalComponent implements OnInit {
  index:number;
  data = [
    {
        "Indice":"18.5",
        "Descripcion":"Peso inferior al normal",
        //"img":"https://co.images.search.yahoo.com/search/images;_ylt=AwrE1x2JqkZg.60ADx6rcgx.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=persona+muy+delgada&fr2=piv-web&fr=mcafee#id=3&iurl=https%3A%2F%2Fdoctorinsta.com%2Fblog_images%2F27431463494402.jpg&action=click"
        "img":"https://doctorinsta.com/blog_images/27431463494402.jpg"

    },
    {
        "Indice":"18.5–24.9",
        "Descripcion":"Normal",
        // "img":"https://co.images.search.yahoo.com/search/images;_ylt=AwrJ7Y7MqkZgUN4AmYytcgx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDc0NTAwNQRfcgMyBGFjdG4DY2xrBGNzcmNwdmlkA1hGeGN0akV3TGpKdEdET09YbDZZTndsck1UZzJMZ0FBQUFCTHJhMS4EZnIDbWNhZmVlBGZyMgNzYS1ncARncHJpZANzRVJfcHo1Q1RXQ0l4eWE1N1NydXZBBG5fc3VnZwMxMARvcmlnaW4DY28uaW1hZ2VzLnNlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMEcXN0cmwDMTMEcXVlcnkDcGVzbyUyMG5vcm1hbAR0X3N0bXADMTYxNTI0Mzk5OQ--?p=peso+normal&fr=mcafee&fr2=sb-top-co.images.search&ei=UTF-8&n=60&x=wrt#id=48&iurl=https%3A%2F%2Fi.blogs.es%2F61a491%2Fistock-467916860%2F840_560.jpg&action=click"
        "img":"https://i.blogs.es/61a491/istock-467916860/840_560.jpg"

    },
    {
        "Indice":"25.0–29.9",
        "Descripcion":"Peso superior al normal",
        // "img":"https://co.images.search.yahoo.com/search/images;_ylt=AwrJ7Y7MqkZgUN4AmYytcgx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDc0NTAwNQRfcgMyBGFjdG4DY2xrBGNzcmNwdmlkA1hGeGN0akV3TGpKdEdET09YbDZZTndsck1UZzJMZ0FBQUFCTHJhMS4EZnIDbWNhZmVlBGZyMgNzYS1ncARncHJpZANzRVJfcHo1Q1RXQ0l4eWE1N1NydXZBBG5fc3VnZwMxMARvcmlnaW4DY28uaW1hZ2VzLnNlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMEcXN0cmwDMTMEcXVlcnkDcGVzbyUyMG5vcm1hbAR0X3N0bXADMTYxNTI0Mzk5OQ--?p=peso+normal&fr=mcafee&fr2=sb-top-co.images.search&ei=UTF-8&n=60&x=wrt#id=75&iurl=https%3A%2F%2Fcdn.laguiadelasvitaminas.com%2Fwp-content%2Fuploads%2F2013%2F09%2FPeso-ideal-seg%25C3%25BAn-estatura-seg%25C3%25BAn-edades.jpg&action=click"
        "img":"https://cdn.laguiadelasvitaminas.com/wp-content/uploads/2013/09/Peso-ideal-seg%C3%BAn-estatura-seg%C3%BAn-edades.jpg"

    },
    {
        "Indice":"30.0",
        "Descripcion":"Obesidad",
        //"img":"https://co.images.search.yahoo.com/search/images;_ylt=AwrE1xFTq0ZgDigAbRCrcgx.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=bebe+gordito&fr2=piv-web&fr=mcafee#id=1&iurl=https%3A%2F%2Fdecabo.com%2Fwp-content%2Fuploads%2F2013%2F06%2Fbebes-gordos.jpg&action=click"
        "img":"https://decabo.com/wp-content/uploads/2013/06/bebes-gordos.jpg"

    }
];

  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    let imc:number;
    let peso:number = parseFloat((document.getElementById("peso") as HTMLInputElement).value);
    let altura:number = parseInt((document.getElementById("altura") as HTMLInputElement).value);

    if (!peso || !altura) {
      alert("Ingrese todos los campos y verifica que la información es correcta")
    } else {
      imc = peso / altura;

      if (imc < 18.5){
        this.index = 0;
      } else if(imc >= 18.5 && imc <= 24.9) {
        this.index = 1;
      } else if(imc >= 25.0 && imc <= 29.9) {
        this.index = 2;
      } else if(imc >= 30.0) {
        this.index = 3;
      }

      (document.getElementById("peso") as HTMLInputElement).value = "";
      (document.getElementById("altura") as HTMLInputElement).value = "";
    }
  }

}
