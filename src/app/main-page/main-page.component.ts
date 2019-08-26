import { Component, OnInit } from '@angular/core';
import { UserHttpServiceService} from "../user-http-service.service"
import { User } from "../user";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user: User;
// user : User = this.UserHttpService.user;
  constructor(public UserHttpService:UserHttpServiceService) { }

  
  searchUser(searchTerm){
    this.UserHttpService.searchUser(searchTerm).then(
      (results)=>{
        this.user = this.UserHttpService.user;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.searchUser("Ndundiro")
  }


}
