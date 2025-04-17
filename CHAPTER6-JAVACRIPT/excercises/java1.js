document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('calculateBtn');
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');
  
    button.addEventListener('click', () => {
      const cost = parseFloat(document.getElementById('cost').value);
      const liters = parseFloat(document.getElementById('liters').value);
  
      if (isNaN(cost) || isNaN(liters)) {
        resultText.textContent = "Please enter valid numbers.";
        resultBox.classList.add('show');
        return;
      }
  
      const total = cost * liters;
      resultText.textContent = `Total Cost: DHS ${total.toFixed(2)}`;
      resultBox.classList.add('show');
    });
  });
  