//
// game-update.js
// =========
// Includes the necessary functions in order to calculate game-specific events.
//

//
// Main Update Function
//

var speed = 0.50;

function game_update() {
    if (key.UP) {
        player.z -= speed; 
    }

    if (key.DOWN) {
        player.z += speed;
    }

    if (key.LEFT) {
        player.x -= speed;
    }

    if (key.RIGHT) {
        player.x += speed;
    }

    GLUpdateUniform(u_mView, flatten(
        lookAt(
            vec3(player.x, player.y, player.z),   
            vec3(player.x, 0.0, 0.0),
            vec3(0.0, 1.0, 0.0)
        )
    ));
}