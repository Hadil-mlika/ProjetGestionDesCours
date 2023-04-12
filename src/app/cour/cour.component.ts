import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {
  name="  cour ";
  constructor() { }

  ngOnInit(): void {
  }
  Commencer (myname:String){
    alert('Commencer'+myname);
  }
}
