import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { ActivatedRoute } from '@angular/router';
import { UserCardService } from '../../user-card.service';
UserCardService

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  constructor(private _HomeService:HomeService, private _ActivatedRoute:ActivatedRoute, private _UserCardService:UserCardService){}
  id: number =0 ;
  item:any;
  searchResult: any;
  data:any;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(parameterMap=>{
      let id = +parameterMap.getAll('id');
      this.search(id);
    })
  }
 search(i:number){
  let {id} = this._ActivatedRoute.snapshot.params;
     this.id = id;
    this.data = this._UserCardService.getuser(this.id);
    if(this.id == this.data)
    {
      console.log(this.data)
    }
  }
  
}
