/*
    This file controls the actual generation of the fortress
*/

const MAX_WALL_HEIGHT = 8;
const CAMERA_X_OFFSET = 5;

// DEBUG
let shouldGenerate = true;

let posOfLastBrick = new THREE.Vector3(CAMERA_X_OFFSET, -1, 0.75);

function generateFortress() {
    
    // in one iteration you need to generate both the left and right side's brick

    // If the wall has reached the maximum height, reset back to 0 and move forward by 2.1
    // (I have no idea why it's 2.1 it should be 3 but idc 2.1 gives the brick-like-texture)
    if (posOfLastBrick.y >= MAX_WALL_HEIGHT) {
        posOfLastBrick.z -= 2.1;
        posOfLastBrick.y = 0;
    }
    else {
        posOfLastBrick.y++;

        // This oscillates the z position to get the stacked brick effect
        if (posOfLastBrick.y % 2 == 0) {
            posOfLastBrick.z -= 0.75;
        }
        else {
            posOfLastBrick.z += 0.75;
        }
    }
    
    // Create and add the brick object with the calculated positions
    let brickR = createBrick(CAMERA_X_OFFSET, posOfLastBrick.y, posOfLastBrick.z);
    let brickL = createBrick(-CAMERA_X_OFFSET, posOfLastBrick.y, posOfLastBrick.z);
    world.addObject(brickR);
    world.addObject(brickL);

    // DEBUG DEBUG DEBUG
    // NORMALLY SETTIMEOUT IS CALLED REGARDLESS 
    if (shouldGenerate) {
        setTimeout(generateFortress, 300);
    }
    
}