import { Component } from '@angular/core';
import { Marks } from '../marks';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {  
  marks:Marks=new Marks();
  rollnumber:string='';
  marksdata:any;
  responsedata:any;
  total:number=0;
  average:number=0;
  //len:number=0;
  constructor(private http:HttpClient,private route:ActivatedRoute){}
  ngOnInit(){
    this.rollnumber=this.route.snapshot.params['rollnumber'];       
    let response = this.http.get("http://localhost:8080/marks/rollnumber?rollnumber="+this.rollnumber);
    response.subscribe(
      (resdata)=>{
        this.marksdata=resdata;
        this.getTotal();
        this.getAverage();     

      }
    )       
    // this.len=this.marksdata.rollnumber.length;
    // console.log(this.len);
  }
  getTotal(){
      this.total= this.marksdata.oops+this.marksdata.os+this.marksdata.se+this.marksdata.mfcs+this.marksdata.selab+this.marksdata.oopslab+this.marksdata.oslab+this.marksdata.numpy;
  }
  getAverage(){
    this.average= this.total/8;
      
  }
  onPrint(){
    window.print();
  }    
}
