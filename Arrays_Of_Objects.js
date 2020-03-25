const Point = (x, y) => {
  this.x = x;
  this.y = y;
};

let displayPts = arr => {
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i].x + " , " + arr[i].y);
  }
};

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);
let p3 = new Point(4, 6);
let p4 = new Point(3, 8);

let points = [p1, p2, p3, p4];

for (let i = 0; i < points.length; ++i) {
  console.log(
    "Point " + parseInt(i + 1) + " : " + points[i].x + ", " + points[i].y
  );
}
