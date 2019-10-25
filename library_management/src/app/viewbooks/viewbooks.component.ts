import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
