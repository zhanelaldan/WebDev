import { Component } from '@angular/core';
import {Album, AP} from "../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  album!: AP | undefined;
  loaded!: boolean
  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.getAlbum();
  }
  getAlbum(){
    this.route.paramMap.subscribe((params)=> {
      const albumId: number = Number(params.get('albumId'));
      this.loaded = false;
      this.albumService.getAlbumPhoto(albumId).subscribe((albums)=>{
        this.album = albums.find(el => el.id === albumId);
        this.loaded = true;
      })
    })
  }
}