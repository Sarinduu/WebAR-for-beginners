document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("#target");
  const ship = document.querySelector("#shipModel");

  // Show model + play sound when marker is found
  target.addEventListener("targetFound", () => {
    console.log("Marker found");
    target.components.sound.playSound();
    ship.emit("fadein");
  });

  // Stop sound when marker is lost
  target.addEventListener("targetLost", () => {
    console.log("Marker lost");
    target.components.sound.stopSound();
  });
});