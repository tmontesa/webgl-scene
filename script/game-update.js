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

    if (key.SPACE) {
        PlayerFly(player, player.speed);
    }

    if (key.LSHIFT) {
        PlayerFly(player, -player.speed);
    }

    GLUpdateUniform(u_mView, flatten(
        lookAt(
            vec3(player.pos.x, player.pos.y, player.pos.z),   
            vec3(player.at.x, player.at.y, player.at.z),
            vec3(0.0, 1.0, 0.0)
        )
    ));

    // Write coords in HTML.
    document.getElementById("player_information").innerHTML = `
    Position: (${Math.round(player.pos.x)}, ${Math.round(player.pos.y)}, ${Math.round(player.pos.z)})<br /> 
    Looking at: (${Math.round(player.at.x)}, ${Math.round(player.at.y)}, ${Math.round(player.at.z)})<br />
    Angle: (${Math.round(player.angle * (180/Math.PI))})
    `;

    if(key.P) {console.log(`${Math.round(player.pos.x)}.0, 0.0, ${Math.round(player.pos.z)}.0`)};
}