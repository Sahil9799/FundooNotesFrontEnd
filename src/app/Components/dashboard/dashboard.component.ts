import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/data/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  token:any;
  message:any;
  subscription: any;
  filterString:any;
  gridView:any=true;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private snav:MatSnackBar, private router: Router, private data:DataserviceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout()
  {
    this.token=localStorage.removeItem("token")
    this.router.navigateByUrl("/login");
    this.snav.open('Logout Successful !','..', {
      duration: 3000,
    })
  }
  onekeyup(text:any){
    this.data.changeMessage(text.target.value);
    console.log(this.filterString);
  }

  grid(){
    this.gridView=true;
    this.data.changeView(this.gridView)
  }
  list(){
    this.gridView=false;
    this.data.changeView(this.gridView)
  }

}