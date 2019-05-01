/*
=============
| SPRITE.js |
=============

A sprite is a "character" or "object" in your game.

This file handles:
- Sprite management (creating, deleting, etc.)
*/
// glbal vars
var sprites = [];
var costumes = [];
var sounds = [];
var zoom = [];

// Creates new sprite
function newSprite(name, costume, sounds, zoom) {
  sprites.push(name);
  costums.push(costumes);
  sounds.push(sounds);
  zoom.push(zoom);
}

function setCostume(name, costume, zoom) { // zoom is optional
  try {
    costumes[sprites.find(name)] = costume;
    if (zoom !== null) {
      zoom[sprites.find(name)] = zoom;
    }
  } catch (error) {
    console.log("Error: Sprite "+name+" was requested but not found.");//dev mode
  }
}

function setZoom(name, zoom) {
  try {
    zoom[sprites.find(name)] = zoom;
  } catch (error) {
    console.log("Error: Sprite "+name+" was requested but not found.");//dev mode
  }
}
