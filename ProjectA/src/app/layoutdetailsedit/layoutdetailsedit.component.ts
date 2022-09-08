import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Layout } from '../models/layout';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-layoutdetailsedit',
  templateUrl: './layoutdetailsedit.component.html',
  styleUrls: ['./layoutdetailsedit.component.css']
})
export class LayoutdetailseditComponent implements OnInit {

/**
 * A constructor function. It is called when the component is created.
 * @param {LayoutService} layoutService - This is the service that we created in the previous step.
 * @param {ActivatedRoute} activatedRoute - This is the current activated route provided by the Angular
 * Router. We'll use this later to fetch the current URL.
 */
  constructor(private layoutService: LayoutService,private activatedRoute:ActivatedRoute) { }

  layoutData: Layout[] = [];
  editId !:any;

  /**
   * We're getting the id from the url params and then calling the getLayoutDetails() function
   */
  ngOnInit(): void {
    this.getEditIdFromParams();
    this.getLayoutDetails();
  }

  /**
   * This function gets the id from the url and assigns it to the editId variable
   */
  getEditIdFromParams(){
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.editId = paramMap.get('id');
    })
  }

  /**
   * This function is used to get the data from the database and store it in the layoutData array
   */
  getLayoutDetails(){
    this.layoutService.getAuthorData().subscribe(res => {
      res.forEach(item => {
        let ld = new Layout();
        ld.authorName = item.authorName;
        ld.authorProfilePic = item.authorProfilePic;
        ld.id = item.id;
        ld.postDescription = item.postDescription;
        ld.postImageUrl = item.postImageUrl;
        ld.postTitle = item.postTitle;
        ld.publishedDate = item.publishedDate;
        this.layoutData.push(ld);
      })
    })
  }

}
