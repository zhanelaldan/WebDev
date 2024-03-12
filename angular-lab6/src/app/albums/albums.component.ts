import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {AlbumService} from "../album.service";
import {RouterLink, RouterModule} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ALBUMS} from "../fake-db";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterModule,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;
  constructor(private albumService: AlbumService) {
    this.newAlbum = {
      userId: 1,
      id: 101,
      title: ''
    }
  }

  ngOnInit() {
    this.getAlbums();
  }
  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums)=>{
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe((album)=>{
      album.id = this.albums.length + 1;
      this.albums.push(album);
      alert('Album succesfully created!');
      this.newAlbum = {} as Album;
    })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((a)=>a.id !== id );
    this.albumService.deleteAlbum(id).subscribe(()=>{
      console.log('deleted');
    })
  }

}