/*█████╗██████╗  █████╗  ██████╗ ███╗   ███╗███████╗███╗   ██╗████████╗    ███████╗██╗  ██╗ █████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔══██╗██╔══██╗██╔════╝ ████╗ ████║██╔════╝████╗  ██║╚══██╔══╝    ██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗
█████╗  ██████╔╝███████║██║  ███╗██╔████╔██║█████╗  ██╔██╗ ██║   ██║       ███████╗███████║███████║██║  ██║█████╗  ██████╔╝
██╔══╝  ██╔══██╗██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║       ╚════██║██╔══██║██╔══██║██║  ██║██╔══╝  ██╔══██╗
██║     ██║  ██║██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗██║ ╚████║   ██║       ███████║██║  ██║██║  ██║██████╔╝███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚*/
precision mediump float;

varying vec4 fNormal;

//
// Fragment Vectors Calculation
//

vec3 CalculateLightPosition(mat4 mView, mat4 mWorld, vec4 pos) {
    return (mView * mWorld * pos).xyz;
}

vec3 CalculateNormalVector(vec3 normal) {
    return normalize(normal);
}

vec3 CalculateViewVector(vec4 at, vec4 pos) {
    return normalize(at - pos).xyz;
}

vec3 CalculateLightVector(vec3 light_pos, vec4 pos) {
    return normalize(light_pos - pos.xyz);
}

vec3 CalculateRelfectionVector(vec3 light_vector, vec3 normal_vector) {
    return normalize(reflect(-light_vector, normal_vector));
}

//
// Spotlight-Specific Calculation

vec3 CaclulateLightDirectionVector(mat4 mView, mat4 mWorld, vec4 at, vec3 light_pos) {
    return normalize(mView * mWorld * vec4(at.xyz - light_pos, 1.0)).xyz;
}

float CalculateAngle(vec3 light_vector, vec3 light_direction_vector) {
    return acos(dot(-light_vector, light_direction_vector));
}

//
// Lighting Functions
//

struct LightIntensity {
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
};

struct PointLight {
    vec3 position;
    LightIntensity intensity;
};

struct SpotLight {
    vec3 position;
    vec3 at;
    float in_angle;
    float out_angle;
    LightIntensity intensity;
};

struct MaterialReflection {
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
};

vec3 ambient(vec3 ref_a, vec3 i_a) {
    return ref_a * i_a;
}

vec3 diffuse(vec3 ref_d, vec3 i_d, vec3 n, vec3 l) {
    return ref_d * i_d * clamp(dot(n, l), 0.0, 1.0) ;
}

vec3 specular(vec3 ref_s, vec3 i_s, vec3 r, vec3 v, float s) {
    return ref_s * i_s * pow(clamp(dot(r, v), 0.0 , 1.0), s);
}

vec3 phong(MaterialReflection ref, LightIntensity i, vec3 n, vec3 v, vec3 l, vec3 r, float s) {
    vec3 a = ambient(ref.ambient, i.ambient);
    vec3 d = diffuse(ref.diffuse, i.diffuse, n, l);
    vec3 s = specular(ref.specular, i.specular, r, v, s);
    return a + d + s;
}

//
// Main
//

void main()
{
    gl_FragColor = vec4(fNormal.xyz, 1.0);
}