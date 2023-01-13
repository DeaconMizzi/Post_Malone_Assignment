(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        //if form is invalid
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            alert('You must fill in all fields!')
          }
          form.classList.add('was-validated')
          //if form is valid, send confirmation
          if (form.checkValidity()){
            alert('Message Sent!')
          }
        }, false)
      })
  })()