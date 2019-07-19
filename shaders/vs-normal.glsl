//
// VERTEX
// SHADER
//

precision mediump float;

attribute vec3 vPosition;
attribute vec3 vNormal;

uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

varying vec3 fNormal;

void main() {
    fNormal = (mWorld * vec4(vNormal, 0.0)).xyz;
    gl_Position =  mProj *  mView * mWorld * vec4(vPosition, 1.0);
}