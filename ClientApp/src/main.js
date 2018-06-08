import '../styles/style.css';

import $ from 'jquery';
import 'jquery-validation';
import 'jquery-validation-unobtrusive';
import 'popper.js';
import 'bootstrap';

$.validator.setDefaults({
  highlight: function (element) {
    $(element).addClass("is-invalid");
  },
  unhighlight: function (element) {
    $(element).removeClass("is-invalid");
  }
});
