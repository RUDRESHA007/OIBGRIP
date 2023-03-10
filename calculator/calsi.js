const display_screen = document.querySelector('.display_screen')
const numbers_btn = document.querySelectorAll('.number')
const operator_btn = document.querySelectorAll('.operator')

//when digit buttons pressed then digits will be displayed
numbers_btn.forEach((e, i) => {

  e.addEventListener('click', (e) => {

    display_screen.value += numbers_btn[i].value;

  })
})

//when digit buttons pressed then operator will be displayed and actual calculation is done
operator_btn.forEach((e, i) => {

  e.addEventListener('click', (e) => {

    if (operator_btn[i].value == '+' || operator_btn[i].value == '-' || operator_btn[i].value == '/' || operator_btn[i].value == '*' || operator_btn[i].value == '%') {
      display_screen.value += operator_btn[i].value
    }

    //when CL or clear button pressed then screen will be cleared
    if (operator_btn[i].value == 'CL') {
      display_screen.value = '0'
    }

    //when delete button pressed then last digit will be deleted
    if (operator_btn[i].innerHTML == '<i class="fa-solid fa-delete-left"></i>') {

      var displayed_no = display_screen.value;
      displayed_no = displayed_no.substring(0, displayed_no.length - 1);
      display_screen.value = displayed_no

    }
    //when = or equal button pressed then result will be displayed
    if (operator_btn[i].value == '=') {

      display_screen.value = eval(display_screen.value)

    }
  })
})
