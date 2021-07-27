/*
    Loop class to control the main game loop 
*/


// Clock to keep track of Delta Time
const clock = new THREE.Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updateables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    addObject(obj) {
        // Add object to scene and list of updateables for Tick()
        this.scene.add(obj);
        this.updateables.push(obj);
    }

    addUpdateable(obj) {
        this.updateables.push(obj);
    }

    removeObject(id) {
        let objIndex = this.updateables.findIndex((obj) => {
            return obj.brickId == id;
        });
        this.scene.remove(this.updateables[objIndex]);
        this.renderer.renderLists.dispose();
        this.updateables.splice(objIndex, 1);
        
    }

    tick() {
        const dt = clock.getDelta();
        for (const object of this.updateables) {
            object.tick(dt);
        }
    }
}