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
    var displace_x = distance * Math.sin(p.angle);
    var displace_z = distance * Math.cos(p.angle);
    PlayerIncrementPosition(p, displace_x, 0.0, displace_z);
    PlayerIncrementAt(p, displace_x, 0.0, displace_z);
}

function PlayerTurn(p, angle) {
    p.angle += angle;
    var move_x = p.radius * Math.sin(p.angle);
    var move_z = p.radius * Math.cos(p.angle);
    PlayerUpdateAt(p, p.pos.x + move_x, p.at.y, p.pos.z + move_z);
}

var player = new Player(0.0, 8.0, 50.0,
                        0.0, 8.0, 20.0,
                        0.50);