/**
 * ENUMS in JS : to define a set of named constants. 
 */

//! In Typescript:

// enum Direction {
//     Up, Down, Left, Right
// }

//! TSC will compile it to the following: the enum is a type, and the values are the enum members. And the name change for the const below is to avoid the namespace collision.

const DirectionInJS = {
    Up: "Up",
    Down: "Down",
    Left: "Left",
    Right: "Right"
}

Object.keys(DirectionInJS).forEach(key => {
    console.log(key, DirectionInJS[key]);
});

console.log("Returns keys", Object.keys(DirectionInJS));