
document.querySelector("#email-submit").addEventListener("click", function(e){
  let emailInput = document.querySelector('#email-input');
  
  if (emailInput.checkValidity()) {
    e.preventDefault();
    
    let email = document.querySelector('#email-input').value;

    let formData = new FormData();
    formData.append('email', email);

    async function postEmail() {
      try {
        const response = await fetch('../backend/newsletter-subscribe.php',
        {
          body: formData,
          method: "post"
        });
        let result = await response.text();
        console.log(result);
        document.querySelector('#email-subscription-message').style.display = "block";
        document.querySelector('#email-subscription-message p').innerHTML = result;
        document.querySelector('#email-subscription-message').style.background = "yellow";
        document.querySelector('#email-input').value = '';
      } catch (e) {
        console.log(e);
      }

    }
    postEmail();
  } 
});

