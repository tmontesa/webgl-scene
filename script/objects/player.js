//
// Player Object
//

function Position(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function Player(x, y, z, at_x, at_y, at_z, speed) {
    this.pos = new Position(x, y, z);
    this.at = new Position(at_x, at_y, at_z);
    this.speed = speed;
    this.speed_modifier = 0;

    this.angle = Math.atan2((at_x - x), (at_z - z));
    this.radius = Math.sqrt(Math.pow(at_x - x, 2) + Math.pow(at_z - z, 2));
}

//
// Player Modification
//

function PlayerUpdatePosition(p, x, y, z) {
    p.pos.x = x;
    p.pos.y = y;
    p.pos.z = z;
}

function PlayerUpdateAt(p, x, y, z) {
    p.at.x = x;
    p.at.y = y;
    p.at.z = z;
}

function PlayerIncrementPosition(p, x, y, z) {
    p.pos.x += x;
    p.pos.y += y;
    p.pos.z += z;
}

function PlayerIncrementAt(p, x, y, z) {
    p.at.x += x;
    p.at.y += y;
    p.at.z += z;
}

//
// Player Functions
//

function PlayerMove(p, distance) {
    var distance_modifier = 1 + (p.speed_modifier/10);
    var displace_x = distance_modifier * distance * Math.sin(p.angle);
    var displace_z = distance_modifier * distance * Math.cos(p.angle);
    PlayerIncrementPosition(p, displace_x, 0.0, displace_z);
    PlayerIncrementAt(p, displace_x, 0.0, displace_z);
}

function PlayerTurn(p, angle) {
    p.angle += angle;
    var move_x = p.radius * Math.sin(p.angle);
    var move_z = p.radius * Math.cos(p.angle);
    PlayerUpdateAt(p, p.pos.x + move_x, p.at.y, p.pos.z + move_z);
}

function PlayerFly(p, distance) {
    var distance_modifier = 1 + (p.speed_modifier/10);
    PlayerIncrementPosition(p, 0.0, distance_modifier * distance, 0.0);
    PlayerIncrementAt(p, 0.0, distance_modifier * distance, 0.0);
}

const initial_x = 0.0;
const initial_y = 10.0;
const initial_z = 0.0;

var player = new Player(initial_x, initial_y, initial_z,
                        initial_x + 0.0, initial_y, initial_z - + 20.0,
                        0.50);