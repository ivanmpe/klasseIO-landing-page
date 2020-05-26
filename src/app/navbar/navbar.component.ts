import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }



  ngOnInit() {

  }

  menu(){
    $(document)
    .ready(function() {
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;
    })
  }
}
