import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpService) { }



  register(data : any){
    let header ={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

   return this.http.postservice('https://localhost:44349/User/Register', data, false, header)
  }
  login(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }

   return this.http.postservice(`https://localhost:44349/User/Login/${data.email}/${data.password}`, {}, false, header)

  }
  // login(data : any){
  //   console.log(data)
  //   let header ={
  //     headers : new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }

  //   return this.http.postservice(`https://localhost:44349/User/Login/${data.email}/${data.password}`, {}, false, header)
  // }

  forgotemail(data : any){
    let header ={
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    }

    return this.http.postservice(`https://localhost:44349/User/Forgotpassword/${data.email}`, { }, false, header)
  }
}
//   forgotpassword(data : any){
//     let header ={
//       headers : new HttpHeaders({
//         'content-type': 'application/json'
//       })
//     }

//     return this.http.putservice(`https://localhost:44349/User/Resetpassword`, data, false, header)
//   }
// }