import { Component } from "@angular/core";

@Component({
    selector: "app-SI",
    templateUrl: "./stringInterpolation.component.html"
})
export class StringInterpolationComonent {

    someNumber: number = 15;
    someText: string = "Hello World";
    someBoolean: boolean = true;

    someFunc1(): number {
        return 115;
    }

    someFunc2(param1: number, param2: number): number {
        // var std= new Student();
        return param1 + param2;
    }

    // someFunc3(param1:any):void{

    // }

}

class Student {

}