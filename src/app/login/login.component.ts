import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyservicesService } from '../service/myservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // formId = 'syllabusAddForm';
  form!: FormGroup;

  constructor(private http : HttpClient , private fb: FormBuilder, private myservices : MyservicesService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login(){
    let data = this.form.value ;
    this.myservices
    .addUser(data)
    .subscribe((response) => {
      console.log(response, "responseeeee");
    });
    console.log(data);
    //asdasd
  }

  login2(){
    let data = this.form.value ;
    this.myservices
    .userList()
    .subscribe((response) => {
      console.log(response, "responseeeee");
    });
    console.log(data);
  }

}






// getUserFormData()
//   {
//     //get form value from service
//     let val = this.contactService.form.value;
//     console.warn(val)
//     this.contactService.saveContact(val).subscribe(data=>{        
//         //edit
//         this.notificationService.success('Submitted successfully');   
//         this.onClose(true);     
//       }      
//     )