var plane;
var suzanne;
var trees = [];
var atmodel;


function init_models() {
    plane = CreateModel(loadFileAJAXasJSON("assets/models/plane.json"), flatten(
        InstanceTransform(
            0.0, 0.0, 0.0, 
            0.0, 0.0, 0.0, 
            50.0, 50.0, 50.0
        )
    ));

    suzanne = CreateModel(loadFileAJAXasJSON("assets/models/suzanne.json"), flatten(
        InstanceTransform(
            2.0, 2.0, -9.0, 
            45.0, 90.0, 180.0, 
            1.0, 2.0, 2.0
        )
    ));

    trees.push(CreateModel(loadFileAJAXasJSON("assets/models/tree.json"), flatten(
        InstanceTransform(
            0.0, 0.0, 0.0, 
            0.0, 0.0, 0.0, 
            1.0, 1.0, 1.0
        )
    )));

    trees.push(CreateModel(loadFileAJAXasJSON("assets/models/tree.json"), flatten(
        InstanceTransform(
            15.0, 0.0, 7.0, 
            0.0, 0.0, 0.0, 
            0.9, 1.5, 1.0
        )
    )));

    trees.push(CreateModel(loadFileAJAXasJSON("assets/models/tree.json"), flatten(
        InstanceTransform(
            10.0, 0.0, 17.0, 
            0.0, 0.0, 0.0, 
            1.0, 2.0, 0.9
        )
    )));


}