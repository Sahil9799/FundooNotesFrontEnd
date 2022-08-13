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
updatenote(data: any, noteId:any) {
  console.log(this.token,data,noteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice( `https://localhost:44349/Note/UpdateNote?noteId=${noteId}`, data, true, header );
}

archivenote(data: any, noteId:any) {
  console.log(this.token);
  console.log(noteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice( `https://localhost:44349/Note/ArchiveNote?noteId=${noteId}`, data, true, header );
}

trashNote(data: any, noteId:any) {
  console.log(this.token);
  console.log(noteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice( `https://localhost:44349/Note/TrashNote?noteId=${noteId}`, data, true, header );
}

ColorNote(data:any,noteId:any,colour:any){
  console.log(this.token);
  console.log(noteId);
  console.log(colour);
  
  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice(`https://localhost:44349/Note/ColorChnageNote?noteId=${noteId}`, data, true, header);
}

DeleteNote(data:any,noteId:any){
  console.log(this.token);
  console.log(noteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.deleteservice(`https://localhost:44349/Note/${noteId}`, true, header)
}
}