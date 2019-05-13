const ColorPuzzle = require('./ColorPuzzle');
const { colors } = require('./constant');
const puzzle = new ColorPuzzle().setPieces(
    [
        // piece1
        [
            [1, 2],
            [2, 1],
            [2, 2],
            [2, 3],
            [3, 2],
            [3, 3],
            [4, 1],
            [4, 2],
            [4, 3],
            [5, 3]
        ],
        // piece2
        [
            [2, 0],
            [3, 0],
            [4, 0],
        ],
        // piece3
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 0],
            [1, 1],
            [1, 3],
            [2, 0],
            [3, 0],
            [3, 1],
            [4, 0],
            [5, 0],
            [5, 1],
            [5, 2]
        ],
        // piece 4
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
        ],
        // piece 5
        [
            [0, 1],
            [0, 2],
            [0, 3],
            [4, 1],
            [4, 2],
            [4, 3],
            [5, 1],
            [5, 2],
            [5, 3],
        ],
        // piece6
        [
            [1, 0],
            [1, 1],
            [1, 3],
            [2, 0],
            [3, 0],
            [3, 1],
            [4, 0],
            [5, 0],
            [5, 1],
            [5, 2]
        ],
        // piece7
        [
            [2, 2],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
            [4, 3],
        ]
    ]
)
    // 031
    .setGoal(
        [
            [colors.blue, colors.blue, colors.blue, colors.blue],
            [colors.white, colors.white, colors.white, colors.white],
            [colors.white, colors.white, colors.blue, colors.white],
            [colors.blue, colors.blue, colors.blue, colors.blue],
            [colors.white, colors.white, colors.white, colors.blue],
            [colors.white, colors.white, colors.white, colors.white],
        ]
    )
    // 026
    // .setGoal(
    //     [
    //         [colors.white, colors.white, colors.blue, colors.blue],
    //         [colors.yellow, colors.white, colors.blue, colors.white],
    //         [colors.yellow, colors.white, colors.white, colors.blue],
    //         [colors.green, colors.green, colors.cyan, colors.cyan],
    //         [colors.yellow, colors.white, colors.blue, colors.white],
    //         [colors.yellow, colors.white, colors.white, colors.blue],
    //     ]
    // )
    // 027
    // .setGoal(
    //     [
    //         [colors.white, colors.white, colors.white, colors.white],
    //         [colors.cyan, colors.cyan, colors.blue, colors.cyan],
    //         [colors.cyan, colors.blue, colors.blue, colors.blue],
    //         [colors.green, colors.green, colors.white, colors.white],
    //         [colors.cyan, colors.blue, colors.blue, colors.blue],
    //         [colors.cyan, colors.cyan, colors.cyan, colors.blue],
    //     ]
    // )
    // 028
    // .setGoal(
    //     [
    //         [colors.red, colors.white, colors.white, colors.white],
    //         [colors.red, colors.red, colors.yellow, colors.red],
    //         [colors.red, colors.yellow, colors.yellow, colors.yellow],
    //         [colors.purple, colors.purple, colors.cyan, colors.white],
    //         [colors.red, colors.green, colors.green, colors.green],
    //         [colors.red, colors.red, colors.red, colors.green],
    //     ]
    // )
    // 029
    // .setGoal(
    //     [
    //         [colors.blue, colors.blue, colors.cyan, colors.cyan],
    //         [colors.cyan, colors.cyan, colors.green, colors.cyan],
    //         [colors.cyan, colors.white, colors.white, colors.green],
    //         [colors.white, colors.white, colors.red, colors.red],
    //         [colors.cyan, colors.white, colors.green, colors.white],
    //         [colors.cyan, colors.cyan, colors.cyan, colors.green],
    //     ]
    // )
    // 030
    // .setGoal(
    //     [
    //         [colors.purple, colors.purple, colors.white, colors.white],
    //         [colors.purple, colors.white, colors.green, colors.white],
    //         [colors.purple, colors.white, colors.white, colors.green],
    //         [colors.purple, colors.purple, colors.white, colors.white],
    //         [colors.purple, colors.white, colors.green, colors.white],
    //         [colors.purple, colors.white, colors.white, colors.green],
    //     ]
    // )
    .solve();
console.log('result: ', puzzle);