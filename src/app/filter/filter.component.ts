import { outputAst } from '@angular/compiler';
import { Component, Input, EventEmitter, Output } from '@angular/core'; //import Input

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('total') all: number = 0;  //total is alias name to "all" property.
  @Input() free: number = 0;
  @Input() premium: number= 0;

  selectedRadioButttonValue: string='All';

  @Output()
  filterRadioButttonSelectionChanged: EventEmitter<string> = new EventEmitter<string>() ; 

  onRadioButttonSelectionChanged(){
    this.filterRadioButttonSelectionChanged.emit(this.selectedRadioButttonValue);
    console.log(this.selectedRadioButttonValue);
  }
}
