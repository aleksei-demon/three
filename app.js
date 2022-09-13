import Viewer from "./viewer.js";
import * as THREE from "./three.module.js"
export default class {
	constructor(){
		Viewer.init();
		this.createObject();
	}
	createObject(){
		this.object = new THREE.Mesh(
			new THREE.BoxGeometry(1,1,1),
			new THREE.MeshStandardMaterial({color:"white"})
		)
		
		Viewer.scene.add(this.object);
		
		this.object.position.z = -5;
		
		var that = this;
		
		Viewer.setUpdate(
			"rotate_object",
			()=>{that.object.rotation.y += .012; that.object.rotation.x += .015;}
			
		)
	}
}