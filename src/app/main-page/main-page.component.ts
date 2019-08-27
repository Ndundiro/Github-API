import { Component, OnInit } from '@angular/core';
import { UserHttpServiceService} from "../user-http-service.service";
// import { RepoHttpServiceService } from "../repo-http-service.service";
import { User } from "../user";
import { Repository } from '../repository';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user: User;
  repos: Repository;
// user : User = this.UserHttpService.user;
  // constructor(public UserHttpService:UserHttpServiceService)  { }
  // ,public RepoHttpService:RepoHttpServiceService-->
  // searchRepo(searchTerm){
  //   this.RepoHttpService.searchRepo(searchTerm).then(
  //     (results)=>{
  //       this.repos = this.RepoHttpService.repos;
  //       console.log(this.repos)
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //   )
  // }
  constructor(public UserHttpService:UserHttpServiceService)  { }
  
  searchUser(searchTerm){
    this.UserHttpService.searchUser(searchTerm).then(
      (results)=>{
        this.user = this.UserHttpService.user;
        // this.searchRepo(searchTerm)
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
