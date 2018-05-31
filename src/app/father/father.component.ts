import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor() { }
  message_to_child = "You can killme but please not fuck your mother :'v";
  message_from_child: string;
  ngOnInit() {
    this.message_from_child = '';
  }
onChildMessage(message: string) {
    this.message_from_child = message;
  }
}
