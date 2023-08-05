import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-addnewstudent',
  templateUrl: './addnewstudent.component.html',
  styleUrls: ['./addnewstudent.component.css']
})
export class AddnewstudentComponent {
  student:Student =  new Student();
  responsedata:any; 
  
  
  constructor(private http:HttpClient){    
    
  }
  ngOnInit(){
    this.student.file={} as any;
  }
  onFileChange(event:any){
    this.student.file= event.target.files[0];
  }
  onRegister(){      
    const imagedata = new FormData;
    console.log(this.student);
    imagedata.append('studentimage',this.student.file,this.student.file.name);
    imagedata.append("rollnumber",this.student.rollnumber);
    imagedata.append("name",this.student.name);
    imagedata.append("dob",this.student.dob);
    imagedata.append("year",this.student.year);
    imagedata.append("branch",this.student.branch);
    imagedata.append("phonenumber",this.student.phonenumber);
    imagedata.append("emailid",this.student.emailid); 
    

    let res = this.http.post("http://localhost:8080/student/register",imagedata,{responseType:'text' as 'json'});
    res.subscribe(
      (data)=>{
        this.responsedata=data;
        console.log(this.responsedata);
        this.student=new Student();        
      }
    )
  }
 

}
