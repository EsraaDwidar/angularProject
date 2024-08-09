import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  input: number = 0;
  totalPages: number = 0;
  page: number = 1;

  currentUserIndex: number = 0;

  constructor(private _HttpClient: HttpClient, private _HomeService : HomeService) { }

  ngOnInit() : void{
    this.getuser();
  }
   
  getuser() {
    this._HomeService.getUsers(this.page).subscribe({
      next: (response) => {
        this.users = this.users.concat(response.data);
        console.log(this.users);
        this.totalPages = response.total_pages;
        console.log(this.totalPages);
      }
    });
  }

  nextUser() {
    for(let i = 0; i <this.users.length; i++){
      if (this.currentUserIndex >= this.users.length) {
        if (this.page < this.totalPages) {
          this.page++;
          this.getuser();
        } 
      }
      this.currentUserIndex++;

    }
  }
  
  previousUser() {
    for(let i = this.users.length; i >0; i--)
    {
      if (this.currentUserIndex <= this.users.length) {
        if (this.page > this.totalPages) {
          this.page--;
          this.getuser();

        } 
      this.currentUserIndex--;
      }
      this.currentUserIndex--;
    }
  }
}

