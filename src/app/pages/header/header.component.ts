import { Component, OnInit } from '@angular/core';
import { UserCardService } from '../../user-card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  constructor(private _UserCardService:UserCardService){}
}
