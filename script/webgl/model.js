//
// Model Object
//

function ModelData(vertices, indices, normals) {
    this.vertices = vertices;
    this.indices = indices;
    this.normals = normals;
}

function ModelBuffers(VBO, IBO, NBO) {
    this.VBO = VBO;
    this.IBO = IBO;
    this.NBO = NBO;
}

function Model(model_data, model_buffers, instance_transform) {
    this.data = model_data;
    this.buffers = model_buffers;
    this.instance_transform = instance_transform;
}

//
// Model Constructor
//

function CreateModel(model_import, instance_transform) {
    var model_data = new ModelData(
        flatten(model_import.meshes[0].vertices),
        new Uint16Array(flatten(model_import.meshes[0].faces)),
        flatten(model_import.meshes[0].normals)
    );

    var VBO = GLCreateBuffer(program, gl.ARRAY_BUFFER, [
        GLCreateAttribute(program, "vPosition", 3, gl.FLOAT, false, 0, 0)
    ]);
    GLEnableBuffer(VBO, model_data.vertices);

    var IBO = GLCreateBuffer(program, gl.ELEMENT_ARRAY_BUFFER);
    GLEnableBuffer(IBO, model_data.indices);

    var NBO = GLCreateBuffer(program, gl.ARRAY_BUFFER, [
        GLCreateAttribute(program, "vNormal", 3, gl.FLOAT, false, 0, 0)
    ]);
    GLEnableBuffer(NBO, model_data.vertices);

    var model_buffers = new ModelBuffers(
        VBO, IBO, NBO
    );

    var model = new Model(model_data, model_buffers, instance_transform);
    GLUpdateUniform(u_mWorld, model.instance_transform)
    return model;
}

// Model Functions

function EnableModel(model) {
    GLEnableBuffer(model.buffers.VBO);
    GLEnableBuffer(model.buffers.IBO);
    GLEnableBuffer(model.buffers.NBO);
    GLUpdateUniform(u_mWorld, model.instance_transform);
}