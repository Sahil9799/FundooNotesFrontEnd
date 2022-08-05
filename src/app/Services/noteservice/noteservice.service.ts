import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private httpservice : HttpService) { 
    this.token=localStorage.getItem(`token`)
  }

  addNote(data:any){
    console.log(this.token);
    
    let header ={
      headers : new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'bearer ' + this.token
      })
  }
  return this.httpservice.postservice(`https://localhost:44349/Note`, data, true, header)
}

getallnotes(){
  console.log(this.token);
  
  let header ={
    headers : new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'bearer ' + this.token
    })
}
return this.httpservice.getservice(`https://localhost:44349/Note`, true, header)
}
updatenote(data: any, _noteId:any) {
  console.log(this.token);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice( `https://localhost:44349/Note/UpdateNote`, data, true, header );
}
}