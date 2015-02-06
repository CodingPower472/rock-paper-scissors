$(document).ready(function() {
    var computerChoice= Math.random();
    var userChoice;
    var resultValue;
    var userWins = 0;
    var computerWins = 0;
    var tie = 0;
    var gamesPlayed = 0;

    $('.userChoices').click(function(){

        userChoice = $(this).val();
        computerChoice = Math.random();
            if (computerChoice < .33){
            computerChoice = 'rock';
        } else if (computerChoice > .66) {
            computerChoice = 'scissors';
        } else {computerChoice = 'paper';}
        $('#computerChoice').html(computerChoice);
        console.log(userChoice, computerChoice);

            if (userChoice === 1){
                if (computerChoice === 'rock') {
                    resultValue = ('tie');
                } else if (computerChoice === 'paper') {
                    resultValue = ('computer wins');
                } else {
                    resultValue = ('user wins')
                }
            } else if (userChoice === 2){
                if (computerChoice === 'paper') {
                    resultValue = ('tie');
                } else if (computerChoice === 'scissors') {
                    resultValue = ('computer wins');
                } else {
                    resultValue = ('user wins')
                }
            } else if (userChoice === 3){
                if (computerChoice === 'scissors') {
                    resultValue = ('tie');
                } else if (computerChoice === 'rock') {
                    resultValue = ('computer wins');
                } else {
                    resultValue = ('user wins')
                }
            }

        console.log(resultValue);

            if (resultValue === 'user wins') {
                userWins += 1;
            } else if (resultValue === 'computer wins'){
             computerWins += 1;
            } else { tie += 1; }

            console.log('c' + computerWins, 'u' + userWins, 't' + tie);
        $('#gamesPlayed').html(gamesPlayed+= 1);
        $('#wins').html(userWins);
        $('#losses').html(computerWins);
        $('#ties').html(tie);
    });
})
