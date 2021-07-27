window.onload = init;

function init() {
    // Container where we will place the render
    const rendererContainer = document.querySelector(".renderer-container");

    const world = new World(rendererContainer);

    const floor = createBrick(0, -3, 0, 7, 0.5, 100, true);
    world.addSceneObject(floor);

    world.start();
    generateFortress();
}
