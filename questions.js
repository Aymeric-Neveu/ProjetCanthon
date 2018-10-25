function Question(question, ans1, ans2, ans3, correct) {
  this.question = question;
  this.answers = [ans1, ans2, ans3,];
  this.answerCorrect = correct;
}

var q1 = new Question('Ou jettes tu ton papier?', 'Dans la poubelle', 'Sur le trottoir','Marre à canard', 0);
var q2 = new Question('Quel objet disparaît le plus vite dans la nature?', 'Une pomme','un sac en plastique','Un téléphone', 0);
var q3 = new Question('Qu est ce qui permet de créer de l energie avec le vent?', 'Les éoliennes', 'Les panneaux solaires', 'Un barrage d eau', 0);
var q4 = new Question('Quel est le moyen de transport le plus écologique pour aller à l école?', 'En bus','En vélo','En voiture', 1);
var q5 = new Question('Dans quelle poubelle mets-tu les bouteilles en plastique?', 'Poubelle Jaune', 'Poubelle Verte', 'Poubelle Bleue', 0);
var q6 = new Question('Quel animal est menacé de disparition?', 'Le panda géant', 'Le crabe', 'L autruche', 0);
var q7 = new Question('Que n aime pas manger les baleines?', 'Krill', 'Hareng', 'Plastique', 2);
var q8 = new Question('Quelle pollution sonore menace les océans?', 'Baigneur', 'Dauphin', 'Bateau', 2);
var q9 = new Question('Quel animal est en danger alors qu il est indispensable pour la reproduction des plantes?', 'Vache', 'Hérisson', 'Abeille', 2);
var q10 = new Question('Quel est le moyen de transport qui pollue le moins?', 'Trotinette', 'Camion', 'Avion', 0);

var list = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
