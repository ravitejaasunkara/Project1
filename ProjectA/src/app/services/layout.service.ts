import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http:HttpClient) { }
  baseUrl = 'https://collab-blog-default-rtdb.firebaseio.com/blogs.json';

 
  /**
   * The function getAuthorData() returns an observable of type any[]
   * @returns An array of objects.
   */
  getAuthorData(){
    return this.http.get<any[]>(this.baseUrl);
  }

}
