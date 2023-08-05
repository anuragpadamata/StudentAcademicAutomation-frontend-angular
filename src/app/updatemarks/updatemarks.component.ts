import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Marks } from '../marks';
import { Student } from '../student';

@Component({
  selector: 'app-updatemarks',
  templateUrl: './updatemarks.component.html',
  styleUrls: ['./updatemarks.component.css']
})
export class UpdatemarksComponent {
  student:Student=new Student();
  marks:Marks=new Marks();
  responsedata:any;
  responsedata2:any;
  constructor(private http:HttpClient){}
  onSubmit(){
    console.log(this.marks.rollnumber);
    let res = this.http.get("http://localhost:8080/findbyrollnumber?rollnumber="+this.marks.rollnumber);
    res.subscribe(
      (data)=>{
        this.responsedata=data;
        console.log("hello");
        console.log(this.responsedata.name);        
      }
    );  
    
  }
  onUpload(){
    let response = this.http.post("http://localhost:8080/marks/upload"+this.marks,{ responsetype:'text' as 'json'
      });
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
