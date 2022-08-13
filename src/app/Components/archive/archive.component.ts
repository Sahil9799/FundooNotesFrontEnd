import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  result:any;

  constructor(public dialog: MatDialog, private note:NoteService) { }

  ngOnInit(): void {
    this.getArchiveList()
  }
  getArchiveList() {
    this.note.getallnotes().subscribe((res: any) => {
      console.log(res.data);
       this.result=res.data;
       this.result.reverse();
       this.result = this.result.filter((object: any) => {
        return object.isArchive === true;
      })
     
    });
  }

  recieveArchiveNote(event:any){
    console.log(event)
    this.getArchiveList()
  }

}
