const correctAnswers = ['D', 'D', 'D', 'D'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
//console.log(form);
//console.log(result);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.classList.remove('d-none');
  result.querySelector('#percentage').textContent = `${score}%`;

  
  if(score == 100)
  { 
    let yazi = "Bravo! Diğer egzersize geçebilirsiniz";
    result.querySelector('#successMessage').textContent = `${yazi}`;
    //btn.disabled = true;
    btn.setAttribute("disabled",""); //yukardaki ile aynı işlemi yapar, disabled atar
  }

});