
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
    var first =  document.getElementById('first').value;
    if (first == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var last =  document.getElementById('last').value;
    if (last == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var age =  document.getElementById('inputAge').value;
    if (age == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    document.getElementById('status').innerText = "Sending...";
    document.getElementById('submit2').submit();

}

//img uplaod

// function readURL(input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
  
//       reader.onload = function (e) {
//         $('#blah')
//           .attr('src', e.target.result);
//       };
  
//       reader.readAsDataURL(input.files[0]);
//     }
//   }

  File.prototype.convertToBase64 = function(callback){
    var reader = new FileReader();
    reader.onload = function(e) {
        callback(e.target.result);
        $('#blah')
          .attr('src', e.target.result);
    };
    reader.onerror = function(e) {
        callback(null, e);
    };        
    reader.readAsDataURL(this);
};

$("#file").on('change',function(){
    var selectedFile = this.files[0];
    if (!selectedFile.name.match(/.(jpg|jpeg|png|gif)$/i)) {
    }
    else {
        selectedFile.convertToBase64(function(base64){
            console.log(base64);
        })
    }
});
  /// Update protfolo page.
  function validateForm3() {
    var picture =  document.getElementById('file').value;
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
    var password =  document.getElementById('password').value;
    if (password == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var first =  document.getElementById('first').value;
    if (first == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var last =  document.getElementById('last').value;
    if (last == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var age =  document.getElementById('inputAge').value;
    if (age == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var city =  document.getElementById('inputCity').value;
    if (city == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    var bio =  document.getElementById('Bio').value;
    if (bio == "") {
        document.getElementById('status').innerText = "Subject cannot be empty";
        return false;
    }
    document.getElementById('status').innerText = "Sending...";
    document.getElementById('submit3').submit();
  }