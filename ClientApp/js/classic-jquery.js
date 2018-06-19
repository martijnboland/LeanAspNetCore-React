import $ from 'jquery';

import 'popper.js';
import 'bootstrap';

import 'jquery-validation';
import 'jquery-validation-unobtrusive';

$.validator.setDefaults({
  highlight: function (element) {
    $(element).addClass("is-invalid");
  },
  unhighlight: function (element) {
    $(element).removeClass("is-invalid");
  }
});
