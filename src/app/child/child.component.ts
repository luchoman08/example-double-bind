import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public father_message: string;
  @Output() say_to_father = new EventEmitter<string>();
  constructor() { 
    this.father_message = 'jajaja si te cambie perro';
  }
  sayToFather(message: string) {
    this.say_to_father.emit(message);
  }
  ngOnInit() {
  }

}
