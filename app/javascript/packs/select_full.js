
import Swal from 'sweetalert2'

document.addEventListener("turbolinks:load", function () {

  console.log(document.querySelectorAll('.tide'))
  document.querySelectorAll('.tide').forEach(function (e) {
     e.addEventListener('click', function (e) {
      var data = e.target
      e.preventDefault();
      
      Swal.fire({
        title: "Are you sure to go?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, fool!",
      }).then((result) => {
        if (result.value) {
          console.log(data)
          Swal.fire("go!", "idiot.", "");
          window.location = data.href;
        }
      });
    })

  })








// let submit = document.forms[0];

// submit.addEventListener('submit',function(e){


// if(submit['product_name'].value == '' || submit['product_money'].value == ''){
  
//   e.preventDefault()

//   alert('12')
//   Swal.fire({
//     title: "Are you sure to go?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, fool!",
//   }).then((result) => {
//     if (result.value) {
//       Swal.fire("go!", "idiot.", "");
//     }
//   });
// }



})
