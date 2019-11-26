import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  imageWidth: number = 100;
  imageHeight: number = 100;
  imageSrc = 'https://bs-uploads.toptal.io/blackfish-uploads/blog/common_mistakes_guide/content/cover_image_file/cover_image/15992/cover-top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png';
  isDisabled: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = !this.isDisabled;
      setTimeout(() => {
        this.isDisabled = !this.isDisabled;
      }, 5000);
    }, 5000);
  }

  //    ()=>{} ------ function(){}

}
