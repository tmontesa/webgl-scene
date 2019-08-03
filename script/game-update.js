//
// game-update.js
// =========
// Includes the necessary functions in order to calculate game-specific events.
//

//
// Main Update Function
//

var mView;

var MaxCD_SpeedModifier = 7;
var CD_SpeedModifier = MaxCD_SpeedModifier;

function game_update() {
    if (key.UP) {
        PlayerMove(player, player.speed);
    }

    if (key.DOWN) {
        PlayerMove(player, -player.speed);
    }

    if (key.LEFT) {
        PlayerTurn(player, player.speed/8);
    }

    if (key.RIGHT) {
        PlayerTurn(player, -player.speed/8);
    }

    if (key.SPACE) {
        PlayerFly(player, player.speed);
    }

    if (key.LSHIFT) {
        PlayerFly(player, -player.speed);
    }

    mView = lookAt(
        vec3(player.pos.x, player.pos.y, player.pos.z),   
        vec3(player.at.x, player.at.y, player.at.z),
        vec3(0.0, 1.0, 0.0)
    );

    GLUpdateUniform(u_mView, flatten(
        mView
    ));

    /* GLUpdateUniform(point_light.location.position, flatten(
        vec3(player.pos.x, player.pos.y, player.pos.z)
    )); */

    // Write coords in HTML.
    document.getElementById("player_information").innerHTML = `
    Position: (${Math.round(player.pos.x)}, ${Math.round(player.pos.y)}, ${Math.round(player.pos.z)})<br /> 
    Looking at: (${Math.round(player.at.x)}, ${Math.round(player.at.y)}, ${Math.round(player.at.z)})<br />
    Angle: (${Math.round(player.angle * (180/Math.PI))}), Speed: (${player.speed_modifier/10 + 1})
    `;
    if(key.P) {console.log(`${Math.round(player.pos.x)}.0, 0.0, ${Math.round(player.pos.z)}.0`)};

    if(key.S && CD_SpeedModifier <= 0) { 
        player.speed_modifier = (player.speed_modifier + 10) % 40;
        CD_SpeedModifier = MaxCD_SpeedModifier;
    }
    
    CD_SpeedModifier--;
}