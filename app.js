//single state object

var state = {
  questions: [{
      question: 'Ou jettes tu ton papier?',
      answers: ['<img src="img/poubelle_verte.png" style="height: 100px">', '<img src="img/trottoir.jpg"	style="height: 100px">', '<img src="img/mare.jpeg"	style="height: 100px">'],
      answerCorrect: 0
    },
    {
      question: 'Quel objet disparaît le plus vite dans la nature?',
      answers: ['<img src="img/pomme.png"	style="height: 100px">', '<img src="img/plastique.jpg"	style="height: 100px">','<img src="img/téléphone.jpg"	style="height: 100px">'],
      answerCorrect: 0
    },
    {
      question: 'Qu est qui permet de créer de l energie avec le vent?',
      answers: ['<img src="img/eolienne2.jpg"	style="height: 100px">', '<img src="img/panneau_solaire.jpg"	style="height: 100px">', '<img src="img/barrage_eau.png"	style="height: 80px">'],
      answerCorrect: 0
    },
    {
      question: 'Quel est le moyen de transport le plus écologique pour aller à l ecole?',
      answers: ['<img src="img/Bus.png"	style="height:70px">','<img src="img/vélo.jpg"	style="height: 100px">','<img src="img/voiture.png"	style="height: 100px">'],
      answerCorrect: 1
    },
    {
      question: 'Dans quelle poubelle mets-tu les bouteilles en plastique?',
      answers: ['<img src="img/poubelle_jaune.png"	style="height: 100px">', '<img src="img/poubelle_verte.png"	style="height: 100px">', '<img src="img/poubelle_bleu.png"	style="height: 100px">'],
      answerCorrect: 0
    },
    {
      question: 'Quel animal est menacé de disparition?',
      answers: ['<img src="img/panda.jpg"	style="height: 100px">', '<img src="img/tourteau1.png"	style="height: 100px">', '<img src="img/autruche.png"	style="height: 100px">',],
      answerCorrect: 0
    },
    {
      question: 'Que n aime pas manger les baleines?',
      answers: ['<img src="img/Krill.jpeg"	style="height: 100px">', '<img src="img/Banc-de-harengs.jpg"	style="height: 100px">', '<img src="img/plastique.jpg"	style="height: 100px">',],
      answerCorrect: 2
    },
    {
      question: 'Quelle pollution sonore menace les océans?',
      answers: ['<img src="img/nageur.png"	style="height: 100px">','<img src="img/dauphin.jpg"	style="height: 100px">','<img src="img/Cargo.jpeg"	style="height: 80px">',],
      answerCorrect: 2
    },
    {
      question: 'Quel animal est en danger alors qu il est indispensable pour la reproduction des plantes?',
      answers: ['<img src="img/vache.png"	style="height: 100px">','<img src="img/herisson.png"	style="height: 100px">','<img src="img/abeille.png"	style="height: 100px">',],
      answerCorrect: 2
    },
    {
      question: 'Quel est le moyen de transport qui pollue le moins?',
      answers: ['<img src="img/trottinette.png"	style="height: 100px">', '<img src="img/camion.jpg"	style="height: 100px">', '<img src="img/Avion.jpg"	style="height: 80px">',],
      answerCorrect: 0
    }
  ],

  currentQuestion: 0,
  userScore: 0
}

//register when start button is clicked and removes div with heading
//and start button
function clickStart() {
  $('.js-startPage').on('click', 'button', function(event) {

    $('.js-startPage').remove();
    $('#question-container').removeClass('hidden');
  })
};

//register when an answer/button has been clicked/chosen by the user
function clickAnswer(chosenElement, state) {

  var chosenAnswer = $(chosenElement).val();

  //if the chosen answer is correct, then tell the user "correct", otherwise "wrong :("
  if (chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {

    state.userScore += 1;
    var x = document.createElement("IMG");
    x.setAttribute("src", "img/humanWin.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  } else {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img/humanLoose.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);

    //add class "wrong answer" so that the button that was clicked can be
    //marked with a red colour
    $(chosenElement).addClass('wrong-answer');
  }

  //add class to the correct answer so that this can be highlighted in green
  $('.button' + state.questions[state.currentQuestion].answerCorrect).addClass('button-correct');

  //remove hover class from button so the highlighted answers will still stay red and green
  //when you hover over them
  $('button').removeClass('hover');

  //show result
  $('.result').removeClass('hidden');
  //show continue button
  $('.js-continue').removeClass('hidden');
  //disable the answer buttons so user cannot continue clicking them
  $('.js-answer').attr('disabled', true);

  return state;
}


function clickContinue(state) {
  //increment which question user is on by one when continue is clicked
  state.currentQuestion += 1;
  //hide continue button and result again, remove questions and answer
  $('.js-continue').addClass('hidden');
  $('.result').addClass('hidden');
  $('section').remove();

  //if quiz is done insert "you're done" and user's score
  //remove count and score from bottom of page
  if (state.currentQuestion > 9) {
    $('body').append('<h1 class="end">Bravo</h1><p class ="endScore">Ton score est de ' + state.userScore + " sur " + state.currentQuestion);
    $('.js-count').remove();
    $('.js-score').remove();

  } else {
    //if quiz is not done insert new question and answers and update user score and question count
    $('#question-container').append("<section class = 'question-container col-8'>" +
      "<p class='question'>" + state.questions[state.currentQuestion].question + "</p><br>" +
      "<button class='button0 js-answer hover' value = '0'>" + state.questions[state.currentQuestion].answers[0] + "</button>" +
      "<button class='button1 js-answer hover' value = '1'>" + state.questions[state.currentQuestion].answers[1] + "</button>" +
      "<button class='button2 js-answer hover' value = '2'>" + state.questions[state.currentQuestion].answers[2] + "</button>" +
      "</section>");

    $('.js-count').text("Question: " + (state.currentQuestion + 1) + "/" + state.questions.length);
    $('.js-score').text("Correct: " + state.userScore + "/" + state.currentQuestion);
  }

}

$(function() {
  clickStart();
  $('#question-container').on('click', 'button', function(event) {

    clickAnswer($(this), state);
  });

  $('.js-continue').click(function(event) {

    clickContinue(state);
  });

});
function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img/humanWin.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
}
