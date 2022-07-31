import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import {Card} from '../model/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Output() PersonelEvent = new EventEmitter<string>();

  @Input() post :any;

  constructor() { }

  ngOnInit(): void {
  }

  AddPersonel(name:string):void
  {
    this.PersonelEvent.emit(name);
  }

}
