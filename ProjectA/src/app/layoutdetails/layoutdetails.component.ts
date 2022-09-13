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


  constructor(private layoutService: LayoutService, private activatedRoute: ActivatedRoute, private router: Router) { }
  //variable declarations
  layoutData:any[] = [];
  currentId!: any;
  currentData: any = [];
  dataCount:number = 0;
  currData!:Layout;

  /**
   * The function is called when the component is initialized. It calls two other functions,
   * getAuthorsData() and getParamsId().
   */
  ngOnInit(): void {
    this.getAuthorsData();
    //console.log(this.layoutData)
    this.getParamsId();
  }


/**
 * It gets the id from the url and assigns it to the currentId variable.
 */
  getParamsId() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentId = paramMap.get('id');
    });
  }
  
  /**
   * I'm using the layoutService to get the data from the database and then I'm pushing the data into
   * the layoutData array.
   */
  getAuthorsData() {
    this.layoutService.getAuthorData().subscribe(res => {
      res.forEach(item => {
        //console.log(item)
        let ld = new Layout();
        ld.authorName = item.authorName;
        ld.authorProfilePic = item.authorProfilePic;
        ld.id = item.id;
        ld.postDescription = item.postDescription;
        ld.postImageUrl = item.postImageUrl;
        ld.postTitle = item.postTitle;
        ld.publishedDate = item.publishedDate;
        this.layoutData.push(ld);
        this.currData = this.layoutData.find(item => item.id == this.currentId);
        //console.log(this.currData);
      })
    })
  }

  getCurrentData(){
    this.currData = this.layoutData.find(item => item.id == this.currentId);
  }

}
