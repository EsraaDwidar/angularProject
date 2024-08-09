import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrl: './usersdata.component.css'
})
export class UsersdataComponent implements OnInit {
  
  @Input() user : any;
  constructor(){}
  ngOnInit(): void {
  }

}
