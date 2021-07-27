/*
    Main camera function that controls the initialization of the camera and any
    animations
*/

const WALK_SPEED = 4.55;

let timeElapsed = 0;

function createCamera(aspectRatio) {
    let camera = new THREE.PerspectiveCamera(
        35, // fov
        aspectRatio,
        0.1,
        100
    );
    
    camera.position.set(0, 4, 20);
    //camera.rotation.x = -10 * (Math.PI / 180);

    camera.tick = (dt) => {
        // Do the camera movement here
        camera.position.z -= dt * WALK_SPEED;

        // Bob the head up and down to create the illusion of walking
        timeElapsed += dt;
        camera.position.y += Math.sin(timeElapsed * 50 / Math.PI) * 0.01; // Sin(timeElapsed * frequency / Math.PI) * scaleFactor
    };

    return camera;
}

