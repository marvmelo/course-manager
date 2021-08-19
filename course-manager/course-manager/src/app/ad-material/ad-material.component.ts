import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ad-material',
  templateUrl: './ad-material.component.html',
  styleUrls: ['./ad-material.component.css']
})
export class AdMaterialComponent implements OnInit {
  
  fileName = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: { target: { files: File[]; }; }){

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }

  ngOnInit(): void {
  }
 

  
  //togglebutton


}