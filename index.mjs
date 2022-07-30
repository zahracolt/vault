import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib(process.env);
const qnt = (x) => stdlib.formatCurrency(x, 4);
const strtngBalAlice = stdlib.parseCurrency(10000);
const strtngBalBob = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(strtngBalAlice);
const accBob = await stdlib.newTestAccount(strtngBalBob);
console.log('Hello Alice and Bob!');
console.log('Welcome to The Vault');
console.log('Launching...');

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo())

const getBal = async (who) => qnt(await stdlib.balanceOf(who));

console.log(`Alice previous balance is: ${await getBal(accAlice)}`)
console.log(`Bob previous balance is: ${await getBal(accBob)}`)

const Shared = (who) =>({
  seeOutcome: (outcome) => {
    if(outcome){
      console.log(`${who} sees Alice is still here so she gets back her tokens`)
    }
    else {
      console.log(`${who} sees Alice isn't here and the countdown is over so Bob inherits her tokens. Congratulations Bob! `)
    }
  },
  informTimeout: () => {
    console.log(`${who} observed a timeout`);
  },
});


console.log('Starting Backends....');
await Promise.all([
  ctcAlice.p.Alice({
    ...Shared('Alice'),
    vaultDeposit: async () =>{
      const deposit = await ask(
        `Alice, How much do you want to put in the vault?`, stdlib.parseCurrency
      )
      return deposit;
    },
    aliceState: async () =>{
      const state = await ask(`Alice, are you still there?`, yesno);
      if(state){
        console.log('Yaay! Alice is still with us');
      }
      else console.log('Sobs!! Alice is dead! ')
    return state;
    }

  }),
  ctcBob.p.Bob({
    ...Shared('Bob'),
    acceptTerms: async (t) =>{
      const vaultTerms = parseInt(t);
      const terms = await ask(`Bob, do you accept the terms of ${qnt(vaultTerms)} as the amount deposited into the vault? `, yesno);
      if(terms){
        return terms;
      }
      else process.exit();
    }
  })
]);

console.log(`Alice's present balance is: ${await getBal(accAlice)}`);
console.log(`Bob's present balance is: ${await getBal(accBob)}`);

console.log('Goodbye Alice!');
console.log('Goodbye Bob!');
process.exit(); 


//McIntyre
