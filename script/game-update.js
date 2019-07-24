//
// game-update.js
// =========
// Includes the necessary functions in order to calculate game-specific events.
//

//
// Main Update Function
//


function game_update() {
    if (key.UP) {
        PlayerMove(player, player.speed);
    }

    if (key.DOWN) {
        PlayerMove(player, -player.speed);
    }

    if (key.LEFT) {
        PlayerTurn(player, player.speed/10);
    }

    if (key.RIGHT) {
        PlayerTurn(player, -player.speed/10);
    }

    GLUpdateUniform(u_mView, flatten(
        lookAt(
            vec3(player.pos.x, player.pos.y, player.pos.z),   
            vec3(player.at.x, player.at.y, player.at.z),
            vec3(0.0, 1.0, 0.0)
        )
    ));
}