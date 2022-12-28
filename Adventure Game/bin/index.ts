import inquirer from "inquirer";


class Main {
  constructor() {
    console.log(`
    Welcome to Adventure Game
    ---------------------------------------------------------`);
  }
}

class Monster extends Main {
  mob: string;
  healthPortion: number;
  constructor() {
    super();
    this.mob = this.monsters[Math.floor(Math.random() * this.monsters.length)];
    console.log(`
    ${this.mob} has appeared`);
    this.healthPortion = 3;
    console.log(`
    You have ${this.healthPortion} Health Portions Remaining
    --------------------------------------------------------`);
  }
  // public mob: string
  monsters: string[] = ["Skeleton", "Zombie", "Creeper"];
}

class Hp extends Monster {
  constructor() {
    super();
    console.log(`
    Your Hp ${this.playerHp}`);
    this.zombieHp = Math.floor(Math.random() * 100);
    console.log(`
    ${this.mob} Hp: ${this.zombieHp}
    ---------------------------------------------------------`);
  }
  playerHp: number = 100;
  zombieHp: number;
}

class Action extends Hp {
  lostZombieHp: number | undefined ;
  lostPlayerHp: number | undefined;
  mob2: string | undefined;
  healthPortion2: number | undefined;
  again: any;
  constructor() {
    super();
    this.start();
  }
  ask: any;
  async start() {
    do {
      this.ask = await inquirer.prompt([
        {
          type: "list",
          name: "questions",
          message: "What would you like to do: ",
          choices: [
            "1. Attack",
            "2. Drink Health Portion",
            "3. Run",
            "4. Exit Game",
          ],
        },
      ]);
      if (this.playerHp <= 0) {
        console.log(`Game Over You Donot have Hp to Proceed!`);
        
      } else {
        if (this.ask.questions === "1. Attack") {
          this.lostZombieHp = Math.floor(Math.random() * (40 - 20) + 20);
          this.lostPlayerHp = Math.floor(Math.random() * 20);

          this.zombieHp = this.zombieHp - this.lostZombieHp;
          this.playerHp = this.playerHp - this.lostPlayerHp;

          console.log(`
        You Lost ${this.lostPlayerHp} Hp`);
          console.log(`
        You damaged ${this.lostZombieHp} Hp
        -------------------------------------------------------`);

          console.log(`
        Your Current HP is: ${this.playerHp}`);

          if (this.zombieHp <= 0) {
            this.mob2 = `
        The ${this.mob} Is Excecuted!`;
            console.log(this.mob2);

            this.zombieHp =
              this.zombieHp + Math.floor(Math.random() * (100 - 80) + 80);
            this.mob =
              this.monsters[Math.floor(Math.random() * this.monsters.length)];
          console.log(`
        Another ${this.mob} Appeared His Hp is: ${this.zombieHp}
        -----------------------------------------------------`);
          } else {
          console.log(`
        ${this.mob} Hp: ${this.zombieHp}
        ------------------------------------------------------`);
          }
        } else if (this.ask.questions === "2. Drink Health Portion") {
          if (this.healthPortion <= 0) {
          console.log(`
        You Donot have health portion remainig
        -----------------------------------------------------`);
          } else {
            this.playerHp = this.playerHp + 25;
            this.healthPortion = this.healthPortion - 1;
          console.log(`
        You have ${this.healthPortion} health portions left`);

          console.log(`
        Your Current hp is ${this.playerHp}
        -------------------------------------------------------`);
          }
        } else if (this.ask.questions === "3. Run") {
          this.lostPlayerHp = Math.floor(Math.random() * 40);
          console.log(`
        ------------------------------------------------------
        You Ran from a ${this.mob} But You lost ${this.lostPlayerHp} Hp
        ------------------------------------------------------`);
        }
      }
    } while (this.ask.questions != "4. Exit Game");
  }
}

// let game = new Main();
// let player = new Monster();
// let healthPercent = new Hp();
let healthPercent = new Action();
