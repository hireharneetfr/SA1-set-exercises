document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('calculateBtn'); // Get the calculate button
    const resultBox = document.getElementById('result-box'); // Get the result box element
    const resultText = document.getElementById('result-text'); // Get the result text element

    button.addEventListener('click', () => {
      const cost = parseFloat(document.getElementById('cost').value); // Get the cost input and convert to float
      const liters = parseFloat(document.getElementById('liters').value); // Get the liters input and convert to float
   
  // Checks if the inputs are valid numbers
      if (isNaN(cost) || isNaN(liters)) {
        resultText.textContent = "Please enter valid numbers."; // Show an error message if invalid input
        resultBox.classList.add('show'); // Make the result box visible
        return;
      }

  // Calculate the total cost
      const total = cost * liters;
      resultText.textContent = `Total Cost: DHS ${total.toFixed(2)}`; // Display the total cost with 2 decimal places
      resultBox.classList.add('show'); // Show the result box with the calculated total
    });
  });
  