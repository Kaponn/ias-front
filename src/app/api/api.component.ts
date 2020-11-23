import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const api = this.http.get('http://localhost:3000');
    api.subscribe(() => console.log('api works'));
  }
}
