import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  email: string;
  phone: number;
  job: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen',email: 'anv',  phone: 1.0079, job: 'H'},
  {name: 'Helium', email: 'abc',  phone: 4.0026, job: 'He'},
  // {email: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {email: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {email: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {email: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {email: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {email: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {email: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {email: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [ 'name', 'email', 'phone', 'job'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

}
