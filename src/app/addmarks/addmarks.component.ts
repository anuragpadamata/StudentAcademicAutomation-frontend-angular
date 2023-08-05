import { Component } from '@angular/core';
import { Student } from '../student';
import { HttpClient } from '@angular/common/http';
import { Marks } from '../marks';

@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.component.html',
  styleUrls: ['./addmarks.component.css']
})
export class AddmarksComponent {
  student:Student=new Student();
  marks:Marks=new Marks();
  responsedata:any;
  responsedata2:any;
  constructor(private http:HttpClient){}
  onSubmit(){
    console.log(this.marks.rollnumber);
    let res = this.http.get("http://localhost:8080/findbyrollnumber?rollnumber="+this.marks.rollnumber,{responseType:'text' as 'json'});
    res.subscribe(
      (data)=>{
        this.responsedata=data;
        console.log(this.responsedata);        
      }
    );  
    
  }
  onUpload(){
    let response = this.http.post("http://localhost:8080/marks/upload",this.marks,{responseType:'text' as 'json'});
      response.subscribe(
        (data)=>{
          this.responsedata2 =data;
          console.log(this.responsedata2);
          this.marks = new Marks();
        }
      )
  }
  total(){
    this.marks.total= this.marks.oops+this.marks.se+this.marks.mfcs+this.marks.os;
    
  }
  percentage(){
    this.marks.percentage=(this.marks.total/400);
  }
  
}
