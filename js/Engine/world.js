/*
    Handles the initialization and rendering of the sim
*/

let camera, renderer, scene, loop;

class World {
    constructor(container) {
        // Init world objects
        scene = createScene();
        camera = createCamera(container.clientWidth / container.clientHeight);
        renderer = createRenderer(container.clientWidth, container.clientHeight);
        loop = new Loop(camera, scene, renderer);

        // Add the camera to the updateables manually so that it can be animated upon
        loop.updateables.push(camera);

        container.append(renderer.domElement);
    }

    addObject(obj) {
        loop.addObject(obj);
    }

    addSceneObject(obj) {
        scene.add(obj);
    }

    addUpdateable(obj) {
        loop.addUpdateable(obj);
    }

    render() {
        // Draw a frame
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}
