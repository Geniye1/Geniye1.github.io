/*
    Main brick object that will make up the entire 'fortress'
*/

// Create a brick at position (x, y, z) with size (w, h, d)
function createBrick(x, y, z, w = 3, h = 1, d = 2, isFloor = false) {
    const geometry = new THREE.BoxBufferGeometry(w, h, d);
    const material = new THREE.MeshNormalMaterial();
    const brick = new THREE.Mesh(geometry, material);

    brick.position.set(x, y, z);

    if (!isFloor) {
        brick.tick = (dt) => {
            //brick.rotation.x += 2 * dt;
            //brick.rotation.y += 2 * dt;
    
            
        };
    }
    
    return brick;
}