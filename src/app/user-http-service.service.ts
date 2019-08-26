import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { User } from "./user";


@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {
  user : User;
  // repos: Repository;

  constructor(private http:HttpClient) { }

  searchUser(searchTerm:string){
    interface  Results{
      created_at: any;
      avatar_url: any;
      followers_url: any;
      following_url: any;
      repos_url: any;
      followers:any;
      following:any;
      login: any;
      // ANOTHER TRY AT THIS....HOPE IT WORKS
       name: string,
        description: string, 
        html_url: string, 
        clone_url: string, 
        homepage:string,
        bio:string,
        public_repos: number
    }

    let searchEndpoint= "https://api.github.com/users/"+searchTerm+"?access_token="+environment.GITHUB_API;
    //  searchEndpoint += "&q"+searchTerm;
    let promise = new Promise((resolve, reject)=>{
      this.http.get<Results>(searchEndpoint).toPromise().then(
        (results)=>{
           this.user = results;
          // do something
          console.log(results)
          resolve()
        },
        (error)=>{
          console.log(error);
          reject()
        }
      )
    })
    return promise;
  }
}
