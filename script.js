// Array of tags (strings) Day 5

let tags = ["Spicy", "Mild", "Fusion", "Caribbean", "West Indian", "Korean"];

let prices = [11, 7.5, 15, 9];

//Checking to see if both show in the console

console.log(tags);
console.log(prices);

let tagText = document.querySelector("#tags");

tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " . ";
}
