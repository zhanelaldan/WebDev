import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {AlbumService} from "../album.service";
import {Album} from "../models";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  loaded!: boolean;
  newTitle!: string;
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
      this.albumService.getAlbum(albumId).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      })
    })
  }

  updateAlbum(){
    this.album.title = this.newTitle;
    this.albumService.updateAlbum(this.album).subscribe((album)=>{
      this.album = album;
    })
  }

}