import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/post';
import { Data } from '../models/data';
import { environment } from 'src/environments/environment';
import { PostUser } from '../models/post-user';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPost() {
    return this.httpClient.post<Character>(`${environment.url}/users`, {});
  }

  getPostById(id: number) {
    return this.httpClient.post<PostUser>(`${environment.url}/user`, {
      id: id,
    });
  }
}
