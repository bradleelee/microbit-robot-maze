import { MAP_ASPECT_RATIO, MICROBIT_COLORS } from "../constants"
import {
    defaultBoxShape,
    defaultColorBrush,
    defaultDynamicPhysics,
    defaultEntity,
    defaultPathShape,
    defaultShapePhysics,
    defaultStaticPhysics,
} from "../sim/specs"
import { pickRandom } from "../util"
import { MapSpec } from "./specs"

const MAP_WIDTH = 90 // cm
const MAP_HEIGHT = MAP_WIDTH / MAP_ASPECT_RATIO

export const name = "Test Map"
export const create = (): MapSpec => ({
    name,
    width: 90, // cm
    aspectRatio: MAP_ASPECT_RATIO,
    color: "#E7E9E7",
    spawns: [
        {
            pos: { x: 20.5, y: 18 },
            //pos: { x: 21, y: 45 / MAP_ASPECT_RATIO },
            angle: 90,
        },
        {
            pos: { x: 20.5, y: MAP_HEIGHT - 18 },
            angle: 90,
        },
    ],
entities: [
    // Outer Walls: Top, Bottom, Left, Right (using thinner blocks)
    {
        ...defaultEntity(),
        pos: { x: MAP_WIDTH / 2, y: 1 }, // top wall; thickness = 1 cm
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: MAP_WIDTH, y: 1 },
                angle: 0,
                roles: ["maze-wall"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#555555",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: false,
                },
            },
        ],
    },
    {
        ...defaultEntity(),
        pos: { x: MAP_WIDTH / 2, y: MAP_HEIGHT - 1 }, // bottom wall
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: MAP_WIDTH, y: 1 },
                angle: 0,
                roles: ["maze-wall"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#555555",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: false,
                },
            },
        ],
    },
    {
        ...defaultEntity(),
        pos: { x: 1, y: MAP_HEIGHT / 2 }, // left wall
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: 1, y: MAP_HEIGHT },
                angle: 0,
                roles: ["maze-wall"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#555555",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: false,
                },
            },
        ],
    },
    {
        ...defaultEntity(),
        pos: { x: MAP_WIDTH - 1, y: MAP_HEIGHT / 2 }, // right wall
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: 1, y: MAP_HEIGHT },
                angle: 0,
                roles: ["maze-wall"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#555555",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: false,
                },
            },
        ],
    },

    // Internal Maze Walls (multiple blocks to form corridors and dead ends)
    {
        // Vertical wall segment on the left side of the maze
        ...defaultEntity(),
        pos: { x: MAP_WIDTH * 0.4, y: MAP_HEIGHT * 0.3 },
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: 1, y: 10 },  // 1 cm thick, 10 cm tall
                angle: 0,
                roles: ["maze-wall"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#555555",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: false,
                },
            },
        ],
    },
    {
        // Horizontal wall creating a dead end on the right
        ...defaultEntity(),
        pos: { x: MAP_WIDTH * 0.7, y: MAP_HEIGHT * 0.5 },
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: 10, y: 1 },  // 10 cm long, 1 cm thick
                angle: 0,
                roles: ["maze-wall"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#555555",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: false,
                },
            },
        ],
    },
    {
        // Additional internal wall to form a corridor
        ...defaultEntity(),
        pos: { x: MAP_WIDTH * 0.55, y: MAP_HEIGHT * 0.75 },
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: 8, y: 1 },
                angle: 0,
                roles: ["maze-wall"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#555555",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: false,
                },
            },
        ],
    },

    // Center Goal: A small black square at the maze center
    {
        ...defaultEntity(),
        pos: { x: MAP_WIDTH / 2, y: MAP_HEIGHT / 2 },
        angle: 0,
        physics: defaultStaticPhysics(),
        shapes: [
            {
                ...defaultBoxShape(),
                offset: { x: 0, y: 0 },
                size: { x: 2, y: 2 },  // small 2x2 cm square
                angle: 0,
                roles: ["goal"],
                brush: {
                    ...defaultColorBrush(),
                    fillColor: "#000000",
                    zIndex: -5,
                },
                physics: {
                    ...defaultShapePhysics(),
                    sensor: true,
                },
            },
        ],
    },
],
})
