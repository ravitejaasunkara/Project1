import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Layout } from '../models/layout';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-layoutdetails',
  templateUrl: './layoutdetails.component.html',
  styleUrls: ['./layoutdetails.component.css']
})
export class LayoutdetailsComponent implements OnInit {


  constructor(private layoutService: LayoutService, private activatedRoute: ActivatedRoute,private router: Router) { }
  //variable declarations
  layoutData: Layout[] = [];
  currentId!: any;
  currentData: any = [];

  ngOnInit(): void {
    this.getAuthorsData();
    this.getParamsId();
  }

  /**
   * The function gets the id from the url and assigns it to the currentId variable
   */
    getParamsId() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentId = paramMap.get('id');
      if(this.currentId == 0 || this.currentId > this.layoutData.length){
        this.router.navigate(['/**']);
      }
    });
  }
  /**
   * The function is called getAuthorsData() and it is a function that is called when the component is
   * loaded. It calls the getAuthorData() function in the layoutService.ts file and then assigns the
   * response to the layoutData variable
   */
  getAuthorsData() {
    this.layoutService.getAuthorData().subscribe(res => {
      this.layoutData = <Array<Layout>>res;
    })
  }



}
