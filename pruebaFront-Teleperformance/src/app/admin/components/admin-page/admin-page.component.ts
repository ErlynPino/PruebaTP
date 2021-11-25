import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  @ViewChild('txtbuscar') txtBuscar!: ElementRef;
  searchValue:string;

  constructor(

  ) { }

  ngOnInit(): void {

  }

  buscar(termino: string) {
    this.searchValue = termino;
  }
}
