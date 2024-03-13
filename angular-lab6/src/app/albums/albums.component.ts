import { Component, OnInit } from '@angular/core';
import { Albums } from '../models';
import { POSTS } from '../fake-db';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent implements OnInit {
  albums!: Albums[];
  newAlbum!: Albums;
  loaded:boolean = false;

  constructor(private albumsService: AlbumsService) { }

  
  ngOnInit() {
    this.getAlbums();
    this.newAlbum = {
      userId: 1,
      id: 101,
      title: ''
    };
  }

  addAlbum(){
    this.albumsService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      alert('Album added successfully!');
    });
    this.newAlbum.title = '';
  }


  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => 
    { 
      this.albums = albums;
      this.loaded = true
    });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(album => album.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(()=>{
      console.log('Album deleted');
    });
  }
}