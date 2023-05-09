// Global Variables
const rpsMove = ["rock", "paper", "scissors"];
const rpslsMove = ["rock", "paper", "scissors", "lizard", "spock"];

// RPS Game
export function rps(pcMove) {
    // Non-playable Character
    let npc = rpsMove[Math.floor(Math.random() * rpsMove.length)];
    // check for null
    if (pcMove === undefined) {
        return { player: npc };
    }
    // simplify argument
    let pc = pcMove.toLowerCase();
    // check parameters
    if (!rpsMove.includes(pc)) {
        console.error(pc + " is out of range.");
        throw new RangeError();
    }
    // now for gameplay
    var result = "";
    if (npc === pc) {
       result = "tie";
    } else if (npc === "scissors" && pc === "paper") {
       result = "lose";
    } else if (npc === "paper" && pc === "rock") {
       result = "lose";
    } else if (npc === "rock" && pc === "scissors") {
       result = "lose";
    } else {
       result = "win";
    }
    // return
    return { player: pc, opponent: npc, result: result };
}

// RPSLS Game 
export function rpsls(pcMove) {
    // Non-playable Character
    let npc = rpslsMove[Math.floor(Math.random() * rpslsMove.length)];
    // check for null
    if (pcMove === undefined) {
        return { player: npc };
    }
    // simplify argument
    let pc = pcMove.toLowerCase();
    // check for parameters
    if (!rpslsMove.includes(pc)) {
        console.error(pc + " is out of range.");
        throw new RangeError();
    }
    // now for gameplay
    var result = "";
    if (npc === pc) {
       result = "tie";
    } else if (npc === "scissors" && pc === "paper") {
       result = "lose";
    } else if (npc === "paper" && pc === "rock") {
       result = "lose";
    } else if (npc === "rock" && pc === "scissors") {
       result = "lose";
    } else if (npc === "rock" && pc === "lizard") {
       result = "lose";
    } else if (npc === "lizard" && pc === "spock") {
       result = "lose";
    } else if (npc === "spock" && pc === "scissors") {
       result = "lose";
    } else if (npc === "scissors" && pc === "lizard") {
       result = "lose";
    } else if (npc === "lizard" && pc === "paper") {
       result = "lose";
    } else if (npc === "paper" && pc === "spock") {
       result = "lose";
    } else if (npc === "spock" && pc === "rock") {
       result = "lose";
    } else {
       result = "win";
    }
    // return
    return { player: pc, opponent: npc, result: result };
}
