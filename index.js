// Your code here
class Polygon{

    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){

        let perimeter = this.sides.reduce(function(total, index){
            return total+index}, 0)

        return perimeter;
    }
}

class Triangle extends Polygon{

    get isValid(){
        if(this.countSides === 3){
            let s1 = this.sides[0];
            let s2 = this.sides[1];
            let s3 = this.sides[2];
            return (s1+s2 > s3 &&
                     s2+s3 > s1 &&
                      s1+s3 > s2);
        }
    }
}

class Square extends Polygon{

    get isValid(){
        if(this.countSides === 4){
            let s1 = this.sides[0];
            let s2 = this.sides[1];
            let s3 = this.sides[2];
            let s4 = this.sides[3];
            return(s1 === s2 && s1 === s3 && s1 === s4);
        }
    }

    get area(){
        if(this.isValid){
            return this.sides[0]*this.sides[2];
        }
    }
}