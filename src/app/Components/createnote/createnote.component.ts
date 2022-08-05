import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  isShow = false;
  title:any;
  description:any;
  

  constructor(private note : NoteService) { }

  ngOnInit(): void {
  }

  show(){
    this.isShow = true;
  }

  close(){
    this.isShow = false;
    console.log(this.title, this.description);
    let data ={
      title:this.title,
      description:this.description,
      colour:"white"
    }

    this.note.addNote(data).subscribe((res :any)=>{
      console.log(res);
      this.messageEvent.emit(res)
      
    })
  }

}