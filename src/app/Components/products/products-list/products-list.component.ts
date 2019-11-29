import { Component, OnInit } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  imageWidth: string = "75px";
  imageHeight: string = "75px";

  Test: string = "yellow";

  

  GetBackgroundColor(prod) {
    switch (prod.starRating) {
      case 1:
        return 'maroon';
        break;
      case 2:
        return "red";
        break;
      case 3:
        return "yellow";
        break;
      case 4:
        return "yellowgreen";
        break;
      case 5:
        return "green";
        break;

      default:
        return "white";
        break;
    }
  }
  GetColor(prod) {
    switch (prod.starRating) {
      case 1:
        return 'white';
        break;
      case 2:
        return "yellow";
        break;
      case 3:
        return "blue";
        break;
      case 4:
        return "black";
        break;
      case 5:
        return "aqua";
        break;

      default:
        return "white";
        break;
    }
  }

  GetClass(prod) {
    switch (prod.starRating) {
      case 1:
        return 'Rating1';
        break;
      case 2:
        return "Rating2";
        break;
      case 3:
        return "Rating3";
        break;
      case 4:
        return "Rating4";
        break;
      case 5:
        return "Rating5";
        break;

      default:
        return "";
        break;
    }
  }

  GetClasses(prod) {
    let result=[];
    switch (prod.starRating) {
      case 1:
         result.push('Rating1');
        break;
      case 2:
          result.push("Rating2");
        break;
      case 3:
          result.push("Rating3");
        break;
      case 4:
          result.push("Rating4");
        break;
      case 5:
          result.push("Rating5 italic");
        break;

      default:
        "";
        break;
    }
    return result;
  }

  products = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 1,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      "emailId": "test@test.com"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
      "emailId": "test@test.com"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 3,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
      "emailId": "test@test.com"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 4,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
      "emailId": "test@test.com"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 5,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
      "emailId": "test@test.com"
    }
  ];
}
