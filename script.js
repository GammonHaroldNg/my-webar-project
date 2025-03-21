document.addEventListener('DOMContentLoaded', () => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Load the glTF model
    const loader = new THREE.GLTFLoader();
    loader.load('./assets/model.glb', (gltf) => {
        const model = gltf.scene;
        scene.add(model);
    }, undefined, (error) => {
        console.error('Error loading glTF model:', error);
    });

    // Camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
});