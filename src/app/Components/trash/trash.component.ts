import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})

export class TrashComponent implements OnInit {
  res:any;
  constructor(private note :NoteService) { }

  ngOnInit(): void {
    this.trashNote();
  }

  trashNote(){
    this.note.getallnotes().subscribe((resp:any)=>{
      console.log(resp.data);
      this.res = resp.data;
      this.res.reverse();
      this.res = this.res.filter((object: any) => {
        return object.isTrash === true;
      });
    })
  }

  recieveArchiveNote(event:any){
    console.log("trash note", event);
    this.trashNote();
  }

}