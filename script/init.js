//
// init.js
// =========
// Function to initialize WebGL, as well as the main game loop.
//

var canvas, gl;
var program;
var u_mWorld, u_mView, u_mProj;



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
    program = initialize_shaders(gl, "shaders/main.vs.glsl", "shaders/main.fs.glsl");
    gl.useProgram(program);

    



    u_mWorld = GLCreateUniform(GLUniformType.MATRIX, program, "u_mWorld", flatten(mat4()));

    u_mView = GLCreateUniform(GLUniformType.MATRIX, program, "u_mView", flatten(
        lookAt(
            vec3(player.pos.x, player.pos.y, player.pos.z),   
            vec3(player.at.x, player.at.y, player.at.z),
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

    init_models();

    
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);

    console.log("Good to go!");
    setInterval(game_loop, 20);
}
