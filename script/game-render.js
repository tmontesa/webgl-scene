//
// game-render.js
// =========
// Includes the necessary WebGL functions to render game-specific objects.
//

//
// Main Render Function
//

function game_render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawElements(gl.TRIANGLES, indices.length * 3, gl.UNSIGNED_SHORT, 0);
}