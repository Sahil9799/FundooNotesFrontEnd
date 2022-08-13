import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString?:any){
    console.log(value,filterString);

    if(!filterString ){
      return value;
    }else{
      filterString=filterString.toLocaleLowerCase();
    }
    return value.filter((note:any) =>{
      return note.title.toLocaleLowerCase().includes(filterString) | note.description.toLocaleLowerCase().includes(filterString);
      
    })

    // if(value.length === 0 || filterString === ''){
    //   return value
    // }
    // const notes = [ ];
    // for(const note of value){
    //   if(note['title'] == filterString || note['description'] == filterString){
    //     notes.push(note)
    //   }
    // }
    // return notes;
  }

  }