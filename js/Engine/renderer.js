function createRenderer(width, height) {
    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    return renderer;
}