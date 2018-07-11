

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
    document.getElementById('submit1').submit();
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
//   function validateForm3() {
//     File.prototype.convertToBase64 = function(callback){
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             callback(e.target.result);
//             $('#blah')
//               .attr('src', e.target.result);
//         };
//         reader.onerror = function(e) {
//             callback(null, e);
//         };        
//         reader.readAsDataURL(this);
//     };
    
//     $("#file").on('change',function(){
//         var selectedFile = this.files[0];
//         if (!selectedFile.name.match(/.(jpg|jpeg|png|gif)$/i)) {
//         }
//         else {
//             selectedFile.convertToBase64(function(base64){
//                 console.log(base64);
//             })
//         }
//     });
//     var email =  document.getElementById('email').value;
//     if (email == "") {
//         document.getElementById('status').innerText = "Email cannot be empty";
//         return false;
//     } else {
//         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(!re.test(email)){
//             document.getElementById('email').innerText = "Email format invalid";
//             return false;
//         }
//     }
//     var password =  document.getElementById('password').value;
//     if (password == "") {
//         document.getElementById('status').innerText = "Subject cannot be empty";
//         return false;
//     }
//     var first =  document.getElementById('first').value;
//     if (first == "") {
//         document.getElementById('status').innerText = "Subject cannot be empty";
//         return false;
//     }
//     var last =  document.getElementById('last').value;
//     if (last == "") {
//         document.getElementById('status').innerText = "Subject cannot be empty";
//         return false;
//     }
//     var age =  document.getElementById('age').value;
//     if (age == "") {
//         document.getElementById('status').innerText = "Subject cannot be empty";
//         return false;
//     }
//     // var city =  document.getElementById('inputCity').value;
//     // if (city == "") {
//     //     document.getElementById('status').innerText = "Subject cannot be empty";
//     //     return false;
//     // }
//     var bio =  document.getElementById('Bio').value;
//     if (bio == "") {
//         document.getElementById('status').innerText = "Subject cannot be empty";
//         return false;
//     }
//     document.getElementById('status').innerText = "Sending...";
//     document.getElementById('submit3').on("click", function(){
//         window.location.reload();
//     });
//   }

  
  var last= $("#last");
  var age= $("#age");
  var email= $("#email");
  var password = $("#password");
  var bio= $("#bio");
  var profileForm = $("#profile");

  // Giving the postCategorySelect a default value
  // Adding an event listener for when the form is submitted
  $(profileForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    // Constructing a newPost object to hand to the database
    var profile = {
      last: last.val().trim(),
      age: age.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
      bio: bio.val() 
    };

    console.log(profile);
  });


//   function validateForm4() {

//     var title =  document.getElementById('title').value;
//     if (title == "") {
//         document.getElementById('status').innerText = "Email cannot be empty";
//         return false;
//     } 
//     var state=  document.getElementById('state').value;
//     if (state == "") {
//         document.getElementById('status').innerText = "Subject cannot be empty";
//         return false;
//     }
//     var about =  document.getElementById('about').value;
//     if (about == "") {
//         document.getElementById('status').innerText = "Subject cannot be empty";
//         return false;
//     }
//     document.getElementById('status').innerText = "Sending...";
//     document.getElementById('submit4').submit();
  
// }
/// for the event page maybe. Refer to squlize activaity 12

    var title= $("#title");
    var state = $("#state");
    var about = $("#about");
    var eventForm = $("#event");
 
    // Giving the postCategorySelect a default value
    // Adding an event listener for when the form is submitted
    $(eventForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the post if we are missing a body or a title
      // Constructing a newPost object to hand to the database
      var newEvent = {
        title: title.val().trim(),
        state: state.val().trim(),
        about: about.val()
      };
  
      console.log(newEvent);
    });
  
    // Submits a new post and brings user to blog page upon completion
    function submitPost(Post) {
      $.post("/event", Post, function() {
        window.location.href = "/event";
      });
    }
  
    // Gets post data for a post if we're editing
    function getPostData(id) {
      $.get("/event" + id, function(data) {
        if (data) {
          // If this post exists, prefill our cms forms with its data
          title.val(data.title);
          state.val(data.body);
          about.val(data.category);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/event",
        data: post
      })
        .then(function() {
          window.location.href = "/event";
        });
    }

  