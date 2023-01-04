const readline = require("readline-sync");
const chalk = require("chalk");
const cfonts = require("cfonts");

function gameEmojuzzle() {

  const style = {
    //  console, block, simpleBlock, simple, 3d, simple3d, chrome,
    //huge, shade, slick, grid, pallet, tiny
    font: "tiny",
    align: "center",
    colors: ["system"],
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: "0",
    gradient: ["red", "yellow"],
    independentGradient: false,
    transitionGradient: true,
    env: "node",
  };

  const welcome = cfonts.render("WELCOME TO|EMOJUZZLE\!", style);
  console.log(welcome.string);


  let emojiArr = [
    "\u{1F63B}",
    "\u{1F41D}",
    "\u{1F3B8}",
    "\u{1F49D}",
    "\u{1F340}",
    "\u{1F9C1}",
  ];
  //Creating random object of emojis 4 of 6
  function randomArr() {
    let obj1 = {};
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < emojiArr.length; j++) {
        obj1[i] = emojiArr[Math.floor(Math.random() * emojiArr.length - 1) + 1];
      }
    }

    let array1 = Object.values(obj1);
    return array1;
  }
  let puzzleArray = randomArr();
  //console.log(puzzleArray.join(" "));

  console.log(
    chalk.red.bold(
      "Find 4 of 6 emojis and their exact positions in the Emojuzzle.\nYou are allowed 10 attempts. Best of luck and enjoy!\nNote: emojis can be repeated.\n\n",
      chalk.yellow(
        chalk.magentaBright.bold.bgBlueBright("c") + "at = 😻\n",
        chalk.magentaBright.bold.bgBlueBright("b") + "ee = 🐝\n",
        chalk.magentaBright.bold.bgBlueBright("g") + "uitar = 🎸\n",
        chalk.magentaBright.bold.bgBlueBright("h") + "eart = 💝\n",
        "c" + chalk.magentaBright.bold.bgBlueBright("l") + "over = 🍀\n",
        "cupca" + chalk.magentaBright.bold.bgBlueBright("k") + "e = 🧁\n"
      )
    )
  );

  function gameLoop() {
    let loopStopCondition = 1;
    while (loopStopCondition <= 10) {
      guess = readline.prompt().toLowerCase();
      let guessArr = guess.split("");

      let obj2 = {};
      for (let i = 0; i < 4; i++) {
        if (guessArr.length === 4) {
          obj2[i] = guessArr[i];
        }
      }

      function PlayerChoice(c, b, g, h, l, k) {
        this.c = c;
        this.b = b;
        this.g = g;
        this.h = h;
        this.l = l;
        this.k = k;
      }
      const obj3 = new PlayerChoice(...emojiArr);
      
      //converting letters(characters) from readlineSync prompt method to adequate emojis
      let playerArr = [];
      for (let e of Object.values(obj2)) {
        for (let b of Object.keys(obj3)) {
          if (e === b) {
            playerArr.push(obj3[b]);
          }
        }
      }

      console.log(chalk.magentaBright.bold(playerArr.join(" ")));
      
      //main condition for comparing player choice and random(machine) choice
      if (samePositionElements(puzzleArray, playerArr) === 4) {
        style.gradient = ["magenta", "red"];
        const congrats = cfonts.render("Congrats,|you got it!", style);
        console.log(congrats.string);

        console.log(
          chalk.bgRedBright.red.bold(
            "\n\n" + puzzleArray.join(" "),
            `${loopStopCondition} ${loopStopCondition === 1 ? "attempt" : "attempts"
            } ${Math.ceil(100 / loopStopCondition)}` + " points!\n\n"
          )
        );

        let winPa = readline.keyInYN(
          chalk.yellow.bold("\nGood job! Want to try again?")
        );
        if (winPa) {
          gameEmojuzzle();
        } else {
          style.gradient = ["yellow", "red"];
          let byeWin = cfonts.render("Bye!", style);
          console.log(byeWin.string);
        }
        process.exit()
      
      } else {
        console.log(
          chalk.bgYellow.bold(loopStopCondition),
          chalk.bgGreen.bold(
            ` ${sameElements(puzzleArray, playerArr).length === 0
              ? "No such emoji"
              : `${sameElements(puzzleArray, playerArr).join(" ")} ${sameElements(puzzleArray, playerArr).length === 1
                ? "is"
                : "are"
              }`
            } in the Emojuzzle. ${samePositionElements(
              puzzleArray,
              playerArr
            )} ${samePositionElements(puzzleArray, playerArr) === 1
              ? "emoji is in the exact position"
              : "emojis are in the exact positions"
            }\nContinue!`,
            chalk.magentaBright.bold.bgBlueBright("c") + "at=😻",
            chalk.magentaBright.bold.bgBlueBright("b") + "ee=🐝",
            chalk.magentaBright.bold.bgBlueBright("g") + "uitar=🎸",
            chalk.magentaBright.bold.bgBlueBright("h") + "eart=💝",
            "c" + chalk.magentaBright.bold.bgBlueBright("l") + "over=🍀",
            "cupca" + chalk.magentaBright.bold.bgBlueBright("k") + "e=🧁\n"
          )
        );
      }

      loopStopCondition += 1;
    }
    let paLost = readline.keyInYN(
      chalk.yellow.bold("\nSorry. Want to try again?")
    );
    if (paLost) {
      gameEmojuzzle();
    } else {
      style.gradient = ["yellow", "red"];
      let bye = cfonts.render("Bye!", style);
      console.log(bye.string);
    }
  }

  function samePositionElements(arr1, arr2) {
    return arr1.filter((element, index) => element === arr2[index]).length;
  }
  // function diffPositionElements(arr1, arr2) {
  //   return arr1.filter((element, index) => element !== arr2[index]).length;
  // }

  function sameElements(arr1, arr2) {
    // return arr1.filter((element => arr2.includes(element)))
    //not repeating elements in array
    set1 = new Set(arr1);
    set2 = new Set(arr2);
    return [...set1].filter((el) => set2.has(el));
  }
  gameLoop();
}

gameEmojuzzle();
