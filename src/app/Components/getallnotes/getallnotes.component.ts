import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  parentMessage:any;

  constructor( private note :NoteService) { }

  ngOnInit(): void {
    this.getNotes()
  }
  getNotes(){
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res);
      this.parentMessage = res.data;
      this.parentMessage.reverse();
    })
  }

  receiveMessage(event:any){
    console.log(event);
    this.getNotes();
  }

  receiveMessagefromdisplaycard(event: any) {
    console.log("inside note", event);
    this.getNotes()
  }
}
