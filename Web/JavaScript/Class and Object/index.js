class Rectangle {
    constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }
    
    paint() {
        console.log(`Painting with color ${this.color}`);
    }
}

const react = new Rectangle(2,4);
const area = react.area();
console.log(area);