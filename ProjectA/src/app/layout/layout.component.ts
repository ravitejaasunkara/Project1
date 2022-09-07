import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Layout } from '../models/layout';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }


  

}
