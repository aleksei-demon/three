import * as THREE from "./three.module.js"
export default {
	init(){
		this.createRenderer();
		this.createCamera();
		this.createScene();
		this.createLight();
		
		this.update();
	},
	createRenderer(){
		
		this.renderer = new THREE.WebGLRenderer();
		
		document.body.appendChild(this.renderer.domElement);
		
		this.renderer.setSize(document.body.offsetWidth,document.body.offsetHeight);
	},
	createCamera(){
		
		this.camera = new THREE.PerspectiveCamera(
			20,
			document.body.offsetWidth/document.body.offsetHeight,
			1,
			100
		)
	},
	createScene(){
		
		this.scene = new THREE.Scene();
	},
	createLight(){
		this.light1 = new THREE.DirectionalLight(0xfff000,.5);
		
		this.scene.add(this.light1);
		
		this.light1.position.set(5,5,5);
		
		
		this.light2 = new THREE.DirectionalLight(0x000fff,.5);
		
		this.scene.add(this.light2);
		
		this.light2.position.set(-4,4,4);
	},
	setUpdate(name,func){
		this.updatePool[name] = func;
	},
	removeUpdate(name){
		delete this.updatePool[name];
	},
	updatePool : {},
	update(){
		
		this.renderer.render(this.scene,this.camera);
		
		var that = this;
		
		requestAnimationFrame(()=>{that.update();});
		
		for(var key in this.updatePool)this.updatePool[key]();
	}
}