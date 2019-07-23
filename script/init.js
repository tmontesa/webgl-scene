//
// init.js
// =========
// Function to initialize WebGL, as well as the main game loop.
//

var canvas, gl;
var program;
var vertices, indices;
var suzanne;
var u_mWorld, u_mView, u_mProj;

var player = {
    x: 0.0,
    y: 0.0,
    z: 10.0
}

function initialize() {
    console.log("Initializing...");

    // Create canvas, check if WebGL is supported.
    canvas = document.getElementById("game");
    gl = canvas.getContext("webgl");
    if (!gl) {
        console.error("ERROR: WebGL is not supported.");
    }
    
    // Set viewport & clear color.
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1, 1, 1, 1.0);

    // Load shaders.
    program = initialize_shaders(gl, "shaders/vs-basic.glsl", "shaders/fs-basic.glsl");
    gl.useProgram(program);

    suzanne = JSON.parse(loadFileAJAX("assets/models/suzanne.json"));
    vertices = suzanne.meshes[0].vertices;
    indices = suzanne.meshes[0].faces;
    
    var vertex_buffer = GLCreateBuffer(program, gl.ARRAY_BUFFER, [
        GLCreateAttribute(program, "vPosition", 3, gl.FLOAT, false, 0, 0)
    ]);
    GLEnableBuffer(vertex_buffer, flatten(vertices));

    var indices_buffer = GLCreateBuffer(program, gl.ELEMENT_ARRAY_BUFFER);
    GLEnableBuffer(indices_buffer, new Uint16Array(flatten(indices)));

    u_mWorld = GLCreateUniform(GLUniformType.MATRIX, program, "u_mWorld", flatten(
        InstanceTransform(2.0, 2.0, 2.0, 45.0, 90.0, 180.0, 2.0, 2.0, 2.0)
    ));

    u_mView = GLCreateUniform(GLUniformType.MATRIX, program, "u_mView", flatten(
        lookAt(
            vec3(player.x, player.y, player.z),   
            vec3(0.0, 0.0, 0.0),
            vec3(0.0, 1.0, 0.0)
        )
    ));

    u_mProj = GLCreateUniform(GLUniformType.MATRIX, program, "u_mProj", flatten(
        perspective(
            60,
            canvas.width / canvas.height,
            0.1,
            1000
        )
    ));


    // Testing JSON import.

    

    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);

    console.log("Good to go!");
    setInterval(game_loop, 20);
}
