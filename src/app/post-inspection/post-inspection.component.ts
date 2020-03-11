import { Component, OnInit } from '@angular/core';
import { Inspection } from './../Models/inspection-item';

@Component({
  selector: 'app-post-inspection',
  templateUrl: './post-inspection.component.html',
  styleUrls: ['./post-inspection.component.css']
})
export class PostInspectionComponent implements OnInit {
  arr: Inspection = [
    {id: 1, name: 'no item', pre: '0', post: '0'},
    {id: 2, name: 'pre item 1', pre: '1', post: '0'},
    {id: 3, name: 'pre item 2', pre: '1', post: '0'},
    {id: 4, name: 'post item 1', pre: '0', post: '1'},
    {id: 5, name: 'post item 2', pre: '0', post: '1'},
    {id: 6, name: 'both item', pre: '1', post: '1'},
];
  constructor() { }

  ngOnInit() {


  }

}