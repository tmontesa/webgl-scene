//
// FRAGMENT
// SHADER
//

precision mediump float;

varying vec3 fNormal;

void main() {
    gl_FragColor = vec4(fNormal, 1.0);
}