/*
    Main brick object that will make up the entire 'fortress'
*/

let brickIdMaster = 0;

// Brick geometry and materials in order to prevent memory leaks
const wireMat = new THREE.LineBasicMaterial( {color: 0xffffff, linewidth: 2} );
const geometry = new THREE.BoxBufferGeometry(3, 1, 2);
const wireGeo = new THREE.EdgesGeometry(geometry);

// Create a brick at position (x, y, z) with size (w, h, d)
function createBrick(x, y, z, w = 3, h = 1, d = 2) {
    
    var transparentWireMat = new THREE.MeshBasicMaterial({color: "white", wireframe: true, transparent: true, opacity: 0});
    var brickWire = new THREE.Mesh(geometry, transparentWireMat);

    brickWire.position.set(x, y, z);
    brickWire.rotateX(Deg2Rad(60));
    brickWire.rotateY(Deg2Rad(60));

    brickWire.desiredPosition = new THREE.Vector3(x, y, z);
    brickWire.desiredRotation = new THREE.Vector3(0, 0, 0);
    if (x > 0) {
        brickWire.position.set(x + 20, y + 2, z - 55);
    }
    else {
        brickWire.position.set(x - 20, y + 2, z - 55);
    }
    
    brickWire.tick = (dt) => {
        brickWire.material.opacity += dt;
        
        brickWire.position.lerp(brickWire.desiredPosition, 0.5);
        brickWire.rotation.setFromVector3(brickWire.rotation.toVector3().lerp(brickWire.desiredRotation, 0.15));
    };

    brickWire.destroy = () => {
        setTimeout(() => {
            destroySelf(brickWire);
        }, 10000);
    }
    
    brickWire.baseGeo = geometry;
    brickWire.wireGeo = wireGeo;
    brickWire.brickId = brickIdMaster++;
    return brickWire;
}

function destroySelf(brick) {
    world.removeObject(brick.brickId);
    brick.baseGeo.dispose();
    brick.wireGeo.dispose();
}

function createFloor(x, y, z, w, h, d) {
    var floorGeometry = new THREE.BoxBufferGeometry(w, h, d);
    var floorWireGeo = new THREE.EdgesGeometry(floorGeometry);
    var floorWire = new THREE.LineSegments(floorWireGeo, wireMat);

    floorWire.position.set(x, y, z);

    floorWire.tick = (dt) => {
        floorWire.position.set(0, 0, camera.position.z);
    }

    return floorWire;
}

function Deg2Rad(degree) {
    return degree * (Math.PI / 180);
}