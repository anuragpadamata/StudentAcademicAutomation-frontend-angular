import { Component } from '@angular/core';
import { Marks } from '../marks';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  marks:Marks=new Marks();
  
  constructor(private http:HttpClient,private router:Router){}
  responsedata:any;
  ngOnInit(){
    
    
  }

  onSearch(){
    console.log(this.marks.rollnumber);
    this.router.navigate(["/results",this.marks.rollnumber]);
    let res = this.http.get("http://localhost:8080/findbyrollnumber?rollnumber="+this.marks.rollnumber,{responseType:'text' as 'json'});
    res.subscribe(
      (data)=>{ 
        this.responsedata=data;
        console.log(data);       
        location.reload();
      }        
    );  
    

    }

}
