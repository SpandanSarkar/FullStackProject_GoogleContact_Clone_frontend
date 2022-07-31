import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import { MyservicesService } from './service/myservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'google-clone-frontend';
  constructor( private myservices : MyservicesService){
  }
  ngOnInit(): void {
    this.myservices.userList().subscribe((response) => {
      console.log(response, "responseeeee");
    });
  }

}
