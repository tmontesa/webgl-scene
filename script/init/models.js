var sky;
var grass;
var path;
var tower;
var house;
var trees = [];
var mountains = [];
var fences = [];
var hays = [];
var crates = [];
var cows = [];
var gems = [];
var torches = [];


function init_models() {
    sky = CreateModel(
        loadFileAJAXasJSON("assets/models/sky/sky.json"),
        Textures.SKY, 
        [10.0, 0.0, 0.0, 10.0],
        flatten(InstanceTransform(
            0.0, 0.0, 0.0, 
            0.0, 0.0, 0.0, 
            -40.0, 40.0, 40.0
        )
    ));


    grass = CreateModel(
        loadFileAJAXasJSON("assets/models/grass/grass.json"),
        Textures.GRASS,
        [1.0, 1.0, 0.0, 1.0], 
        flatten(InstanceTransform(
            0.0, 0.0, 0.0, 
            0.0, 0.0, 0.0, 
            20.0, 20.0, 20.0
        )
    ));

    path = CreateModel(
        loadFileAJAXasJSON("assets/models/path/path.json"),
        Textures.PATH,
        [1.0, 0.0, 0.0, 1.0], 
        flatten(InstanceTransform(
            0.0, 0.5, 0.0, 
            0.0, 0.0, 0.0, 
            10.0, 10.0, 10.0
        )
    ));

    tower = CreateModel(
        loadFileAJAXasJSON("assets/models/tower/tower.json"),
        Textures.TOWER,
        [1.0, 0.4, 1.0, 10.0], 
        flatten(InstanceTransform(
            -30.0, 0.0, -176.0, 
            0.0, 0.0, 0.0, 
            3.0, 3.0, 3.0
        )
    ));

    house = CreateModel(
        loadFileAJAXasJSON("assets/models/house/house.json"),
        Textures.HOUSE,
        [1.0, 0.4, 1.0, 10.0], 
        flatten(InstanceTransform(
            -69.0, 0.0, -275.0, 
            0.0, 2.0, 0.0, 
            4.0, 3.0, 4.0
        )
    ));

    mountains = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                170.0, 0.0, -120.0, 
                0.0, 133.0, 0.0, 
                22.0, 31.0, 20.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                175.0, 0.0, 77.0, 
                0.0, 269.0, 0.0, 
                29.0, 15.0, 19.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                10.0, 0.0, 215.0, 
                0.0, 12.0, 0.0, 
                23.0, 41.0, 25.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                -210.0, 0.0, 152.0, 
                0.0, 49.0, 0.0, 
                29.0, 29.0, 23.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                -145.0, -4.0, -115.0, 
                0.0, -79.0, 0.0, 
                21.0, 19.0, 18.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                100.0, 0.0, -291.0, 
                0.0, 133.0, 0.0, 
                19.0, 29.0, 20.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                55.0, 0.0, -382.0, 
                0.0, 12.0, 0.0, 
                19.0, 15.0, 19.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/mountain/mountain.json"),
            Textures.MOUNTAIN,
            [1.5, 0.0, 0.0, 1.0], 
            flatten(InstanceTransform(
                -277.0, 0.0, -368.0, 
                0.0, 116.0, 0.0, 
                25.0, 55.0, 41.0
            )
        )),
    ];

    trees = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -18.0, 0.0, -18.0, 
                0.0, 0.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -24.0, 0.0, 2.0, 
                0.0, 0.0, 0.0, 
                1.9, 3.0, 1.9
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -16.0, 0.0, 18.0, 
                0.0, 0.0, 0.0, 
                2.1, 2.8, 2.1
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                1.0, 0.0, 29.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.4, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                18.0, 0.0, 18.0, 
                0.0, 0.0, 0.0, 
                2.1, 1.9, 2.1
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                26.0, 0.0, 1.0, 
                0.0, 0.0, 0.0, 
                1.9, 3.0, 1.9
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                20.0, 0.0, -15.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.2, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -51.0, 0.0, -140.0, 
                0.0, 22.0, 0.0, 
                3.9, 5.2, 3.9
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                20.0, 0.0, -162.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.2, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                25.0, 0.0, -185.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.2, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                19.0, 0.0, -200.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.2, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                5.0, 0.0, -213.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.2, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -11.0, 0.0, -221.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.2, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/tree/tree.json"),
            Textures.TREE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -28.0, 0.0, -228.0, 
                0.0, 0.0, 0.0, 
                2.0, 3.2, 2.0
            )
        )),
    ];

    fences = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/fence/fence.json"),
            Textures.FENCE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -52.0, 0.0, -153.0, 
                0.0, -13.0, 0.0, 
                3.3, 3.1, 4.7
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/fence/fence.json"),
            Textures.FENCE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -30.0, 0.0, -150.0, 
                0.0, 13.0, 0.0, 
                3.3, 3.0, 4.3
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/fence/fence.json"),
            Textures.FENCE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                15.0, 0.0, -147.0, 
                0.0, 27.0, 0.0, 
                3.7, 3.2, 5.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/fence/fence.json"),
            Textures.FENCE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                22.0, 0.0, -95.0, 
                0.0, 23.0, 0.0, 
                3.3, 3.0, 4.3
            )
        )),
    ]

    hays = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -61.0, 0.0, -113.0, 
                0.0, 33.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -57.0, 0.0, -109.0, 
                0.0, 33.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -64.0, 0.0, -118.0, 
                0.0, 33.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -58.0, 5.0, -111.0, 
                0.0, 33.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -63.0, 5.0, -116.0, 
                0.0, 33.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -60.0, 10.0, -113.0, 
                0.0, 33.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                25.0, 0.0, -47.0, 
                0.0, 13.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                20.0, 0.0, -54.0, 
                0.0, 13.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/hay/hay.json"),
            Textures.HAY,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                23.0, 5.0, -50.0, 
                0.0, 63.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),
    ];

    crates = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/crate/crate.json"),
            Textures.CRATE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -52.0, 0.0, -120.0, 
                0.0, 37.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/crate/crate.json"),
            Textures.CRATE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                20.0, 0.0, -36.0, 
                0.0, -12.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/crate/crate.json"),
            Textures.CRATE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                5.0, 0.0, -88.0, 
                0.0, -192.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/crate/crate.json"),
            Textures.CRATE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                5.0, 6.0, -88.0, 
                0.0, 12.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/crate/crate.json"),
            Textures.CRATE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                5.0, 12.0, -88.0, 
                0.0, 45.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/crate/crate.json"),
            Textures.CRATE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                5.0, 18.0, -88.0, 
                0.0, 91.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/crate/crate.json"),
            Textures.CRATE,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                5.0, 24.0, -88.0, 
                0.0, 188.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),
    ];

    cows = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                36.0, 0.0, -28.0, 
                0.0, 12.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                47.0, 0.0, -43.0, 
                0.0, 67.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                16.0, 0.0, -67.0, 
                0.0, 99.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                45.0, 0.0, -59.0, 
                0.0, 130.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -18.0, 0.0, -36.0, 
                0.0, -78.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -27.0, 0.0, -61.0, 
                0.0, -19.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -34.0, 0.0, -132.0, 
                0.0, 121.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.COW,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -36.0, 0.0, -110.0, 
                0.0, 87.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.GEM,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -70.0, 5.0, -273.0, 
                0.0, 180.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.GEM,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -30.0, 45.0, -176.0, 
                0.0, 90.0, 0.0, 
                1.5, 1.5, 1.5
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/cow/cow.json"),
            Textures.GEM,
            [1.0, 0.9, 0.05, 1.0], 
            flatten(InstanceTransform(
                -247.0, 0.0, -219.0, 
                0.0, 90.0, 0.0, 
                1.5, 1.5, 1.5
            )
        )),
    ]

    gems = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                71.0, 39.0, -107.0, 
                12.0, 0.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                71.0, 27.0, -107.0, 
                0.0, 0.0, 17.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                71.0, 23.0, -107.0, 
                35.0, 0.0, 4.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                120.0, 70.0, -90.0, 
                17.0, 0.0, 0.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                120.0, 70.0, -90.0, 
                52.0, 0.0, 11.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                120.0, 70.0, -90.0, 
                -3.0, 0.0, 41.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                87.0, 44.0, -155.0, 
                -32.0, 0.0, 21.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                87.0, 55.0, -155.0, 
                -2.0, 0.0, 11.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                95.0, 66.0, -165.0, 
                -11.0, 0.0, -21.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                -172.0, 0.0, -235.0, 
                -11.0, 0.0, -21.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                -172.0, 3.0, -235.0, 
                2.0, 0.0, 0.0, 
                3.0, 3.0, 3.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/gem/gem.json"),
            Textures.GEM,
            [1.5, 0.2, 5.50, 200.0], 
            flatten(InstanceTransform(
                -172.0, 1.0, -235.0, 
                12.0, 0.0, 2.0, 
                3.0, 3.0, 3.0
            )
        )),
    ];

    torches = [
        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                -11.0, 0.0, -29.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                17.0, 0.0, -27.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                10.0, 0.0, 28.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                -28.0, 0.0, -78.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                2.0, 0.0, -80.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                -25.0, 0.0, -115.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                -3.0, 0.0, -117.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                -14.0, 0.0, -153.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                6.0, 0.0, -150.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                -80.0, 0.0, -227.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),

        CreateModel(
            loadFileAJAXasJSON("assets/models/torch/torch.json"),
            Textures.TORCH,
            [1.0, 0.9, 0.10, 2.0], 
            flatten(InstanceTransform(
                -45.0, 0.0, -243.0, 
                0.0, 0.0, 2.0, 
                2.0, 2.0, 2.0
            )
        )),
    ];
    
}