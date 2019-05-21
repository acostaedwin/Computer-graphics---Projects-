
var diamondGeometry={
    "normals":[-0.00238,-0.999939,-0.009369,0.000397,-0.009247,-0.999939,0.951445,-0.012452,-0.307474,0.587237,-0.0159,0.809229,-0.586718,-0.014893,0.809626,-0.951415,-0.010804,-0.307718,-0.503189,0.848537,-0.163488,0,0.848537,-0.529099,0.310984,0.848537,0.428053,0.503189,0.848537,-0.163488,-0.310984,0.848537,0.428053],
    "metadata":{
        "version":3,
        "normals":11,
        "uvs":0,
        "vertices":11,
        "faces":13,
        "generator":"io_three",
        "type":"Geometry"
    },
    "uvs":[],
    "vertices":[0.091105,-0.136052,-0.258967,0.095383,0.933904,-1.24226,1.04644,0.933904,-0.551281,0.683168,0.933904,0.566753,-0.492403,0.933904,0.566753,-0.855674,0.933904,-0.551281,0.690243,1.36047,-0.435546,0.095383,1.36047,-0.867737,0.463026,1.36047,0.263755,-0.272261,1.36047,0.263754,-0.499478,1.36047,-0.435546],
    "faces":[32,0,1,2,0,1,2,32,0,2,3,0,2,3,32,0,3,4,0,3,4,33,1,5,10,7,1,5,6,7,32,0,4,5,0,4,5,32,0,5,1,0,5,1,32,8,6,7,8,9,7,32,7,10,9,7,6,10,32,7,9,8,7,10,8,33,4,3,8,9,4,3,8,10,33,5,4,9,10,5,4,10,6,33,3,2,6,8,3,2,9,8,33,2,1,7,6,2,1,7,9],
    "name":"CylinderGeometry"
};

function createDiamond() {
	diamondsGroup = new THREE.Object3D();			
	for (var i = 0; i < 60; i++) {
		var material = new THREE.MeshPhongMaterial({color: Math.random() * 0xff00000 - 0xff00000,
			shading: THREE.FlatShading
		});
		var diamond = new THREE.Mesh(geometry, material);
		diamond.position.x = Math.random() * -distance * 6;
		diamond.position.y = Math.random() * -distance * 2;
		diamond.position.z = Math.random() * distance * 3;
		diamond.rotation.y = Math.random() * 2 * Math.PI;
		diamond.scale.x = diamond.scale.y = diamond.scale.z = Math.random() * 50 + 10;		
		diamondsGroup.add(diamond);
	}
	diamondsGroup.position.x = 1400;
	scene.add(diamondsGroup);	
};

// -- spheres -- //
function createSpheres() {
	
	spheres = new THREE.Object3D();

	for (var i = 0; i < 80; i++) {
		var sphere = new THREE.SphereGeometry(4, Math.random() * 12, Math.random() * 12);
		var material = new THREE.MeshPhongMaterial({
			color: Math.random() * 0xff00000 - 0xff00000,
			shading: THREE.FlatShading,
		});

		var particle = new THREE.Mesh(sphere, material);
		particle.position.x = Math.random() * distance * 10;
		particle.position.y = Math.random() * -distance * 6;
		particle.position.z = Math.random() * distance * 4;
		particle.rotation.y = Math.random() * 2 * Math.PI;
		particle.scale.x = particle.scale.y = particle.scale.z = Math.random() * 12 + 5;
		spheres.add(particle);
	};

	spheres.position.y = 500;
	spheres.position.x = -2000;
	spheres.position.z = -100;
	spheres.rotation.y = Math.PI * 600;

	scene.add(spheres);
};