import { Component, OnInit } from '@angular/core';
import { Crud1Service } from 'src/app/services/crud1.service';
import { Crud1 } from 'src/app/models/crud1.model';

@Component
({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component implements OnInit
{
  carga: Crud1[] = [];

  // parâmetro por meio de injeção de dependência
  constructor(private crud1Service: Crud1Service)
  { }

  ngOnInit(): void
  {
    this.crud1Service.getCrud1().subscribe
    ({
      next: (data) => { this.carga = data; },
      error: (e) => { console.log(e); }
    })
  }
}