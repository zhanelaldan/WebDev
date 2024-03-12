import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, AP} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) {

  }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhoto(id: number): Observable<AP[]>{
    return this.client.get<AP[]>(`${this.BASE_URL}/albums/1/photos`);
  }

  createAlbum(newAlbum: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, newAlbum);
  }

  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(updatedAlbum: Album): Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${updatedAlbum.id  }`, updatedAlbum);
  }


}