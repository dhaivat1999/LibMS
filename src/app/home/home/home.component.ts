import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { IUser } from './../../interfaces/users';
import { UserService } from './../../services/user.service';
import { FirebaseServiceService } from './../../services/firebase-service.service';
import { AuthService } from './../../services/auth.service';
import { BehavesubService } from './../../services/behavesub.service';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs';
// import {timer} from 'rxjs';
// import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit,OnDestroy   {
  // public showloader: boolean = false;      
  // private subscription: Subscription;
  // private timer: Observable<any>;
  user:IUser[]; 
  userList:IUser[];
  userArray:String[];
  gridSize:number;
  loggedOut(){
    sessionStorage.removeItem('loggedIn');
  }
  getUserName(){
        this.firebaseService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot => {
          this.userList=[];
                    usersSnapshot.forEach(userSnapshot =>{
              let user=userSnapshot.payload.toJSON();
              user['$key']=userSnapshot.key;
               this.userList.push(user as IUser);
            console.log( this.userList[0].userEmail);
          });
        });
       
  }
  checkLogin:boolean;
  constructor(private firebaseService: FirebaseServiceService,private authService:AuthService,private behaveSub:BehavesubService,private router:Router) {  
   this.behaveSub.gridSize.subscribe((data)=>{
    this.gridSize=data   
   })
  }  
  updateGrid(){
    this.behaveSub.gridSize.next(this.gridSize+3);
    this.router.navigate(['\showbook'])
  }
  ngOnInit() {
     
      this.checkLogin=this.authService.isLoggedIn;
  }
  
  public ngOnDestroy() {
  
  }
  
}
