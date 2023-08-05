import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Marks } from '../marks';

@Component({
  selector: 'app-adminresults',
  templateUrl: './adminresults.component.html',
  styleUrls: ['./adminresults.component.css']
})
export class AdminresultsComponent {
  marks:Marks=new Marks();
  
  constructor(private http:HttpClient){}
  responsedata:any;

  onSubmit(){
    console.log(this.marks.rollnumber);
    let res = this.http.get("http://localhost:8080/findbyrollnumber?rollnumber="+this.marks.rollnumber);
    res.subscribe(
      (data)=>{
        this.responsedata=data;
        
        console.log(this.responsedata.name);        
      }
    );  

    }
    onPrint(){
      window.print();
    }


}
