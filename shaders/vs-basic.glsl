attribute vec3 vPosition;

uniform mat4 u_mWorld;
uniform mat4 u_mView;
uniform mat4 u_mProj;

void main()
{
    gl_Position =  u_mProj * u_mView * u_mWorld * vec4(vPosition, 1.0);
}