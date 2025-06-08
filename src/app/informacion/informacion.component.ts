import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informacion',
  standalone: false,
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent implements OnInit {
  universidades: any[] = [];
  selectedUniversity: string = '';

  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.obtenerUniversidades();
  }
  obtenerUniversidades() {
    this.http.get<any[]>('http://universities.hipolabs.com/search?country=Peru')
      .subscribe(data => {
        this.universidades = data;
      }, error => {
        console.error('Error al obtener universidades', error);
      });
  }

}
