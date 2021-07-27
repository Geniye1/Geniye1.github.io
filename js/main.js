window.onload = init;

let world;

function init() {
    // Container where we will place the render
    const rendererContainer = document.querySelector(".renderer-container");

    world = new World(rendererContainer);

    const floor = createBrick(0, 0, 0, 7, 0.5, 100, true);
    world.addSceneObject(floor);
    
    world.start();
    generateFortress();
}

window.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        shouldGenerate = false;
    }
})