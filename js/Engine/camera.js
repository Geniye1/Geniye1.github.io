/*
    Main camera function that controls the initialization of the camera and any
    animations
*/

const WALK_SPEED = 4.55;

let timeElapsed = 0;

let cameraMoveScaleFactor = 40;
let currentMouseXPosition, currentMouseYPosition = 0;

function createCamera(aspectRatio) {
    let camera = new THREE.PerspectiveCamera(
        35, // fov
        aspectRatio,
        0.1,
        100
    );
    
    camera.position.set(0, 4, 20);

    // TODO:
    // Chief you gotta remove the tick function and replace it with a recursive function like in Generator.js
    // i cant take this anymore the camera keeps outrunning the generation its mocking me
    camera.tick = (dt) => {
        // Do the camera movement here
        camera.position.z -= dt * WALK_SPEED;

        // Bob the head up and down to create the illusion of walking
        timeElapsed += dt;
        camera.position.y += Math.sin(timeElapsed * 50 / Math.PI) * 0.01; // Sin(timeElapsed * frequency / Math.PI) * scaleFactor
    };

    return camera;
}

// Ripped from the JS Processing API lmao
// Low1 and High1 is the original range and Low2 and High2 is the desired range
function Remap(value, low1, high1, low2, high2) {
    return low2 + (value - low1) * (high2 - low2) / (high1 - low1)
}

// Slightly move the camera left and right with the mouse
document.body.addEventListener("mousemove", (event) => {
    currentMouseXPosition = Remap(event.x, 0, 1920, -1, 1) / cameraMoveScaleFactor;
    currentMouseYPosition = Remap(event.y, 0, 1080, -1, 1) / cameraMoveScaleFactor;
    camera.rotation.y = -currentMouseXPosition;
    camera.rotation.x = -currentMouseYPosition;
});

