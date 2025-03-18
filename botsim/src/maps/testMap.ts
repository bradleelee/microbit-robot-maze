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
            angle: 90,
        },
        {
            pos: { x: 20.5, y: MAP_HEIGHT - 18 },
            angle: 90,
        },
    ],
    entities: [
        // Outer Walls
        // Top wall: horizontal block spanning full width, 5 cm thick
        {
            ...defaultEntity(),
            pos: { x: MAP_WIDTH / 2, y: 2.5 },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: MAP_WIDTH, y: 5 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Bottom wall
        {
            ...defaultEntity(),
            pos: { x: MAP_WIDTH / 2, y: MAP_HEIGHT - 2.5 },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: MAP_WIDTH, y: 5 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Left wall
        {
            ...defaultEntity(),
            pos: { x: 2.5, y: MAP_HEIGHT / 2 },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 5, y: MAP_HEIGHT },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Right wall
        {
            ...defaultEntity(),
            pos: { x: MAP_WIDTH - 2.5, y: MAP_HEIGHT / 2 },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 5, y: MAP_HEIGHT },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },

        // Internal Maze Walls
        // For simplicity, we add a few wall segments to create corridors and dead-ends.
        // Left vertical wall (with a gap in the middle)
        // Top segment:
        {
            ...defaultEntity(),
            pos: { x: 45 - 15, y: MAP_HEIGHT / 2 - ((MAP_HEIGHT / 2 - 10) / 2) },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 5, y: (MAP_HEIGHT / 2) - 10 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Bottom segment:
        {
            ...defaultEntity(),
            pos: { x: 45 - 15, y: MAP_HEIGHT / 2 + ((MAP_HEIGHT / 2 - 10) / 2) },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 5, y: (MAP_HEIGHT / 2) - 10 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Right vertical wall (with gap)
        // Top segment:
        {
            ...defaultEntity(),
            pos: { x: 45 + 15, y: MAP_HEIGHT / 2 - ((MAP_HEIGHT / 2 - 10) / 2) },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 5, y: (MAP_HEIGHT / 2) - 10 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Bottom segment:
        {
            ...defaultEntity(),
            pos: { x: 45 + 15, y: MAP_HEIGHT / 2 + ((MAP_HEIGHT / 2 - 10) / 2) },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 5, y: (MAP_HEIGHT / 2) - 10 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Horizontal walls splitting corridors
        // Upper horizontal wall
        {
            ...defaultEntity(),
            pos: { x: 45, y: MAP_HEIGHT / 2 - 15 },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 20, y: 5 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },
        // Lower horizontal wall
        {
            ...defaultEntity(),
            pos: { x: 45, y: MAP_HEIGHT / 2 + 15 },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 20, y: 5 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["block"],
                },
            ],
        },

        // Center Goal: a small black square in the center that the robot must reach.
        {
            ...defaultEntity(),
            pos: { x: 45, y: MAP_HEIGHT / 2 },
            angle: 0,
            physics: defaultStaticPhysics(),
            shapes: [
                {
                    ...defaultBoxShape(),
                    size: { x: 10, y: 10 },
                    offset: { x: 0, y: 0 },
                    angle: 0,
                    physics: defaultShapePhysics(),
                    brush: { ...defaultColorBrush(), fillColor: "#000000" },
                    roles: ["goal"],
                },
            ],
        },
    ],
})
