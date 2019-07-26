//
// game-render.js
// =========
// Includes the necessary WebGL functions to render game-specific objects.
//

//
// Main Render Function
//

function game_render() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    RenderModel(sky);
    RenderModel(grass);
    RenderModel(path);
    RenderModel(tower);
    RenderModel(house);
    RenderModels(mountains);
    RenderModels(trees);
    RenderModels(fences);
    RenderModels(hays);
    RenderModels(crates);
    RenderModels(cows);
    RenderModels(gems);
}