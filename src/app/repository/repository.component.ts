// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-repository',
//   templateUrl: './repository.component.html',
//   styleUrls: ['./repository.component.css']
// })
// export class RepositoryComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { RepoHttpServiceService } from "../repo-http-service.service";
// import {Github} from '../github';
// import { Gitrepo } from '../gitrepo';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  gitrepos:Repository;

    constructor(public RepoHttpService:RepoHttpServiceService) {
     }


    ngOnInit() {
      this.searchRepo("Ndundiro");
    }

    searchRepo(searchTerm){
      this.RepoHttpService.searchRepo(searchTerm).then(
        ()=>{
          this.gitrepos=this.RepoHttpService.gitrepos;
          //  console.log(this.gitrepos);

        },
        (error)=>{
          console.log(error)
        }
      )
      // console.log(searchTerm)
    }
  }
