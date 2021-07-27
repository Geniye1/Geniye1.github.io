/*
    Main camera function that controls the initialization of the camera and any
    animations
*/

const WALK_SPEED = 4.5;

function createCamera(aspectRatio) {
    let camera = new THREE.PerspectiveCamera(
        35, // fov
        aspectRatio,
        0.1,
        100
    );
    
    camera.position.set(0, 4, 15);

    camera.tick = (dt) => {
        // Do the camera movement here
        camera.position.z -= dt * WALK_SPEED;
    };

    return camera;
}

