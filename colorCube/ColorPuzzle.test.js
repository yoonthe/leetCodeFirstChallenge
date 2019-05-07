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
        // piece3
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
        ],
        // piece4
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
        ]
    ]
)
    // 025
    .setGoal(
        // [
        //     [colors.purple, colors.purple, colors.blue, colors.purple],
        //     [colors.red, colors.white, colors.white, colors.white],
        //     [colors.purple, colors.purple, colors.blue, colors.blue],
        //     [colors.purple, colors.blue, colors.blue, colors.blue],
        //     [colors.white, colors.white, colors.white, colors.cyan],
        //     [colors.purple, colors.purple, colors.purple, colors.purple],
        // ]

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
    .setGoal(
        [
            [colors.white, colors.white, colors.white, colors.white],
            [colors.cyan, colors.cyan, colors.blue, colors.cyan],
            [colors.cyan, colors.blue, colors.blue, colors.blue],
            [colors.green, colors.green, colors.white, colors.white],
            [colors.cyan, colors.blue, colors.blue, colors.blue],
            [colors.cyan, colors.cyan, colors.cyan, colors.blue],
        ]
    )
    .solve();
console.log('result: ', puzzle);