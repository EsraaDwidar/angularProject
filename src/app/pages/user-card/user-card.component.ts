import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserCardService } from '../../user-card.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit{
   id: any ;
  item:any;
  @Input() user : any;
  constructor( private _ActivatedRoute:ActivatedRoute, private _UserCardService:UserCardService){}

  ngOnInit(): void {
    let {id} = this._ActivatedRoute.snapshot.params;
     this.id = id;
    this._UserCardService.getuser(this.id).subscribe({
      next:(response)=>{
        this.item = response.data;
      console.log(this.item);
    } 
    })
  }
}