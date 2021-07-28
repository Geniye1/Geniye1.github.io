window.onload = init;

let world;

function init() {
    // Container where we will place the render
    const rendererContainer = document.querySelector(".renderer-container");

    world = new World(rendererContainer);
    
    const floor = createFloor(0, 0, 0, 7, 0.5, 500);
    world.addObject(floor);
    
    world.start();
    generateFortress();
}

window.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        shouldGenerate = false;
    }
})

