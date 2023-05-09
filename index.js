/*
Oh no, it's the zombie apocalypse and your town is being attacked by hordes of undead creatures! You need to create a fence that will keep them out. Luckily for you, you're an Tony Stark-level genius who has a robot that can do exactly what you ask of it. We just need to ask it with the correct wording...
Write a function called buildFenceCommand that takes in 2 parameters. The first should be called numOfFencePosts, and the second should be called fencePostMaterial. You can expect that the first parameter's argument value will always be a positive integer, and the second parameter's argument value will always be a string representing a type of build material (i.e. iron, wood, etc.).
Your function should log a string to the console that matches this format: "JARVIS is now building X fence post number ____", where the X represents the build material of the fence post, and the blank represents the current fence post number being built.
Hint: Consider what type of JavaScript code will allow you to do something over and over again!
*/

//param 1 is positive integer, param 2 is a string
function buildFenceCommand(numOfFencePosts, fencePostMaterial) {
    for(let i = 1; i < numOfFencePosts + 1; i++) {
        console.log("JARVIS is now building " + fencePostMaterial + " fence post number " + i);
    }
    
}

buildFenceCommand(20, "iron");