function myPyramid(position,radius,height){   
  var geometry = new THREE.CylinderGeometry(0, radius, height, 4, 1)
  var material = new THREE.MeshNormalMaterial();
  var pyramid = new THREE.Mesh(geometry, material);
  pyramid.position.set(position[0],position[1],position[2]);
  return pyramid;
}

function myCylinder(position,radiusTop,radiusBottom,height,radialSegments,color_){
  var geometry = new THREE.CylinderGeometry(radiusTop,radiusBottom,height,radialSegments);
  var material = new THREE.MeshBasicMaterial( {color: color_} );
  var cylinder = new THREE.Mesh( geometry, material );
  cylinder.position.set(position[0],position[1],position[2]);
  return cylinder;
}