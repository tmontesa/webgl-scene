var u_mWorld, u_mView, u_mProj;

function init_transformations() {
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
            90,
            canvas.width / canvas.height,
            0.1,
            5000
        )
    ));
}