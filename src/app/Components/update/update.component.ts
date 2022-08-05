import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<any>();
  title: any;
  description: any;
  colour: any;
  noteId: any;

  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private note: NoteService) {
      this.title = this.data.title;
    this.description = this.data.description;
    this.colour = this.data.colour;
    this.noteId = this.data.noteId;
  }

  ngOnInit(): void {
    console.log("content updated", this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    //console.log(this.title, this.description);
    let data = {
      title: this.title,
      description: this.description,
      colour: "white",
    }

    this.note.updatenote(data,this.noteId).subscribe((res: any) => {
      console.log("note is updated", res);
      this.updatedisplay.emit(res)
    })
  }
}