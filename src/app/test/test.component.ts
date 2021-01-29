import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name:string ='Hager';
  class='class1';
  constructor() { }

  ngOnInit(): void {
  }

}
