
/// main login in page//////////////////////////////////////////

function validateForm() {

    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerText = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('email').innerText = "Email format invalid";
            return false;
        }
    }
    var password =  document.getElementById('password').value;
    if (password == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    document.getElementById('status').innerText = "Sending...";
    document.getElementById('submit').submit();
console.log(password);
}

/// Login for new user page////////////////

function validateForm2() {
    var picture=  document.getElementById('file').value;
    if (picture == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerText = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('email').innerText = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('password').value;
    if (subject == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var subject =  document.getElementById('first').value;
    if (subject == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var subject =  document.getElementById('last').value;
    if (subject == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var subject =  document.getElementById('inputAge').value;
    if (subject == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var subject =  document.getElementById('inputCity').value;
    if (subject == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var subject =  document.getElementById('Bio').value;
    if (subject == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    document.getElementById('status').innerText = "Sending...";
    document.getElementById('submit2').submit();

}

//img uplaod

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('#blah')
          .attr('src', e.target.result);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }