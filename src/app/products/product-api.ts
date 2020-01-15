// export class Product {

//     constructor(productId:number,productName:string,productCode:string,releaseDate:string,
//         description:string,price:number,starRating:number,imageUrl:string,emailId:string){
//             this.productId = productId;
//             this.productName= productName;
//             this.productCode= productCode;
//             this.releaseDate = releaseDate;
//             this.description = description;
//             this.price = price;
//             this.starRating =starRating;
//             this.imageUrl = imageUrl;
//             this.emailId = emailId; 
//     }
//     productId:number;
//     productName:string;
//     productCode:string;
//     releaseDate:string;
//     description:string;
//     price:number;
//     starRating:number;
//     imageUrl:string;
//     emailId:string;
// }

export class Product {

    constructor(public productId: number, public productName: string, public productCode: string, public releaseDate: string,
        public price: number, public starRating: number, public imageUrl: string,public description?: description) {

    }
}

export class description {
    constructor(public descText: string, public emailId: string) {

    }
}





export const products: Product[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": {
            "descText": "Leaf rake with 48-inch wooden handle.",
            "emailId": "test@test.com"
        },
        "price": 19.95,
        "starRating": 1,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"

    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        // "description": { "descText": "15 gallon capacity rolling garden cart", "emailId": "test@test.com" },
        "price": 32.99985,
        "starRating": 2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",

    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": { "descText": "Curved claw steel hammer", "emailId": "test@test.com" },
        "price": 8.9,
        "starRating": 3,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",

    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": { descText: "15-inch steel blade hand saw", "emailId": "test@test.com" },
        "price": 11.55787878,
        "starRating": 4,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",

    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": { descText: "Standard two-button video game controller", "emailId": "test@test.com" },
        "price": 35.957878,
        "starRating": 5,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",

    }
];