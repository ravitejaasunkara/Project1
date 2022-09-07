import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http:HttpClient) { }
  baseUrl = 'https://collab-blog-default-rtdb.firebaseio.com/blogs.json';

 /**
  * It returns an observable of the author data
  * @returns An observable
  */
  getAuthorData(){
    return this.http.get(this.baseUrl);
  }

}
