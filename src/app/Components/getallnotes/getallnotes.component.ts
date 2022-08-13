import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  getNotes() {
    this.note.getallnotes().subscribe((res: any) => {
      console.log(res.data);
      this.parentMessage = res.data;
      this.parentMessage.reverse();
      this.parentMessage = this.parentMessage.filter((object: any) => {
        return object.isTrash=== false && object.isArchive === false
       
      })
    }); 
  }

  receiveMessage(event: any) {
    console.log(event);
    this.getNotes();
  }

  //this one is for update note
  updateData(event :any){
    console.log(event);
    this.getNotes();
  }

  recieveArchiveNote(event :any){
    console.log(event);
    this.getNotes();
  }
  getcolornote(event:any){
    console.log(event);
    this.getNotes();
  }
}
