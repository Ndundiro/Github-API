import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment"
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class RepoHttpServiceService {

   gitrepos: Repository;

  constructor(private http:HttpClient) { }

  searchRepo(searchTerm:string){
    interface  Results{
      
       name: string,
        description: string, 
        html_url: string,
        url:string 
        
    }

    let searchEndpoint= "https://api.github.com/users/"+searchTerm+"/repos?access_token="+environment.GITHUB_API;
    //  searchEndpoint += "&q"+searchTerm;
    let promise = new Promise((resolve, reject)=>{
      this.http.get<Results>(searchEndpoint).toPromise().then(
        (results)=>{
           this.gitrepos = results;
          
          console.log(this.gitrepos)
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


