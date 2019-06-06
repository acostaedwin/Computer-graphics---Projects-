class Point{  
  constructor(x,y,color,size){
    this.x=x;
    this.y=y;
    this.color=color;
    this.size=size;    
  }
  Print(){
    var pointGeometry = new THREE.Geometry();
    var point = new THREE.Vector3(this.x,this.y,0);
    pointGeometry.vertices.push(point);
    var pointMaterial = new THREE.PointsMaterial( { color: new THREE.Color("rgb("+this.color+")") , size:this.size } );
    //console.log(pointMaterial.color.getHex());
    var point = new THREE.Points( pointGeometry, pointMaterial);
    return point;
  }
}

class Box{  
  constructor(x,y,s){
    this.x=x;
    this.y=y;
    this.s=s;    
  }
  Print(){
    //console.log("x: "+this.x+" - y: "+this.y+" - z: "+this.z);
    var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(this.x-this.s,this.y-this.s,0));
    geometry.vertices.push(new THREE.Vector3(this.x-this.s,this.y+this.s,0));
    geometry.vertices.push(new THREE.Vector3(this.x+this.s,this.y+this.s,0));
    geometry.vertices.push(new THREE.Vector3(this.x+this.s,this.y-this.s,0));
    geometry.vertices.push(new THREE.Vector3(this.x-this.s,this.y-this.s,0));
    //geometry.vertices.push(new THREE.Vector3(10,0,0));
    var line = new THREE.Line( geometry, material );
    
    return line;

  }
}

class Pixel{  
  constructor(x,y,color){
    this.x=x;
    this.y=y;
    this.color=color;
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getColor(){
    return this.color;
  }
  setColor(color){
    this.color=color;
  }
}

