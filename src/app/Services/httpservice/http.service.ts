import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  postservice(url:string, data: any, token: boolean=false, httpOption :any){
    console.log("inside http service")
    
    return this.httpClient.post(url, data, token && httpOption)
    
  }

  getservice(url:string, token: boolean=false, httpOption :any){
    
    return this.httpClient.get(url, token && httpOption)
  }

  putservice(url:string, data: any, token: boolean=false, httpOption :any){
    
    return this.httpClient.put(url, data, token && httpOption)
    
  }

  deleteservice(){
    
  }
}