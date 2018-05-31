import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Actor } from '../models/actor';
@Component({
  selector: 'app-new-actor',
  templateUrl: './new-actor.component.html',
  styleUrls: ['./new-actor.component.css']
})
export class NewActorComponent implements OnInit {
  @Output() actorEmmiter: EventEmitter<Actor>;
  actor: Actor;
  message: string;
  constructor() {
    this.message = '';
    
  }
  
  registerActor(): boolean{
    console.log(this.actor);
    if (this.actor.name === ''){
      this.message = "Actor name can not be empty";
      return false;
    }
    if(this.actor.country_origin === ''){
      this.message = "Actor country origin can not be empty";
      return false;
    } else {
      this.actorEmmiter.emit(this.actor);
      this.actor.name = '';
      this.actor.country_origin = '';
      this.message = 'Actor created';
    }
  }
  ngOnInit() {
  }

}
