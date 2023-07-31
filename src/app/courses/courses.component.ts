import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses =[
    {id:1, name:'Javascript', type:'Free'},
    {id:2, name:'Typescript', type:'Free'},
    {id:3, name:'c', type:'Premium'},
    {id:4, name:'Java', type:'Free'},
    {id:5, name:'Python', type:'Premium'}
  ]
  getTotalcourse(){
    return this.courses.length;
  }

  getFreecourse(){
    return this.courses.filter(course => course.type === 'Free').length;
  }

  getPremiumcourse(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton: string ='All';

  onFilterRadioButtonChanged(data:string){
    this.courseCountRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }


  searchText: string='';

  onSearchTextEntered(searchValue:string){
    this.searchText= searchValue;
    //console.log(this.searchText);
  }

}
