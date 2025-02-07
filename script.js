function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  function giveFeedback() {
    const rating = prompt("Please rate my portfolio (1-5):");
    if (rating >= 1 && rating <= 5) {
      alert("Thank you for your feedback! You rated: " + rating);
    } else {
      alert("Invalid rating. Please enter a number between 1 and 5.");
    }
  }