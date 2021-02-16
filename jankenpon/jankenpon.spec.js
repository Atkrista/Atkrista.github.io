const imports = require('./jankenpon.js');


describe('FirstTestSuite', () => {
    // check if actual random nu
    xit('Actual random numbers are generated', () => {
        // check 100 values
        let counts = {
            0: 0,
            1: 0,
            2: 0,
        }
        // for 100 tries
        for (let i = 0; i < 100; i++) {
            let num = imports.generateRandomNumber(0, 2);
            (num == 0) ? counts['0']++ : (num == 1) ? counts['1']++ : counts['2']++;
        }
        expect((counts['0'] > 30) && (counts['1'] > 30) && (counts['2'] > 30)).toEqual(true);
    });
    xit('Choice is either rock, paper or scissors', () => {
        let choice = imports.computerPlay();
        console.log(typeof (choice));
        expect(['rock', 'paper', 'scissors'].includes(choice)).toEqual(true);
    });

    // for a single round
    it('player chooses Rock, computer scissors', () => {
        expect(imports.playRound('rock', 'scissors')).toEqual('Player');
    });
    it('player chooses Scissors, computer Paper', () => {
        expect(imports.playRound('scissors', 'paper')).toEqual('Player');
    });
    it('player chooses Paper, computer scissors', () => {
        expect(imports.playRound('paper', 'scissors')).toEqual('Computer');
    });
    it('player chooses Rock, computer Rock', () => {
        expect(imports.playRound('rock', 'rock')).toEqual('Draw');
    });
    it('player chooses Scissors, computer Rock', () => {
        expect(imports.playRound('scissors', 'rock')).toEqual('Computer');
    });
});
