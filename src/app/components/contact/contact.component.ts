import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'My first AGM project';
  lat: number = 13.042257;
  lng: number = 77.613552;
  pglat: number = 13.0402054;
  pglng: number = 77.6215341;
  zoom: number = 14;
}
