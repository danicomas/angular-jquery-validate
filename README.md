angular-jquery-validate
=======================

jzaefferer/jquery-validation (https://github.com/jzaefferer/jquery-validation) to AngularJS

### Scripts

```html
<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.12.0/jquery.validate.min.js"></script>
<script src="scripts/angular-jquery-validate.js"></script>
```

### App

```js
var app = angular.module('YourApp', ['angular-jquery-validate']);
```

```js
app.config(function ($jqueryValidateProvider) {
    $jqueryValidateProvider.setDefaults({
   errorPlacement: function (error, element) {
  
   },
   showErrors: function (errorMap, errorList) {
  	 this.defaultShowErrors();
  
  	 // destroy tooltips on valid elements
  	 $("." + this.settings.validClass).tooltip("destroy");
  	 $("." + this.settings.validClass).removeAttr("data-original-title");
  
  	 // add/update tooltips 
  	 for (var i = 0; i < errorList.length; i++) {
  		 var error = errorList[i];
  
  		 if ($("#" + error.element.id).attr("data-original-title")) {
  			 if (!($("#" + error.element.id).attr("data-original-title") == error.message)) {
  				 $("#" + error.element.id).tooltip("destroy");
  				 $("#" + error.element.id).tooltip({
  					 placement: "right",
  					 template: '<div class="tooltip tooltip-error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  				 }).attr("data-original-title", error.message);
  				 $("#" + error.element.id).tooltip("show");
  			 }
  		 }
  		 else {
  			 $("#" + error.element.id).tooltip({
  				 trigger: "focus",
  				 placement: "right",
  				 template: '<div class="tooltip tooltip-error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  			 }).attr("data-original-title", error.message);
  		 }
  	 }
   }
  });
  
  $jqueryValidateProvider.addMethod("time24", function (value, element) {
   return /^([01]?[0-9]|2[0-3])(:[0-5][0-9]){2}$/.test(value);
  }, "Invalid time format.");
  
  $jqueryValidateProvider.addMethod("time24WithoutSeconds", function (value, element) {
   return /^([0-1]\d|2[0-3]):([0-5]\d)/.test(value);
  }, "Invalid time format.");
});
```

### View

```html
<form id="EventForm" formvalidator formvalidatorconfig="eventformvalidate" formvalidatorapi="eventformvalidateapi">
  <div class="row">
    <div class="col-md-8 col-sm-8 col-xs-8">
      <input type="text" id="Subject" name="Subject" maxlength="50" class="form-control" data-ng-model="event.subject" />
    </div>
  </div>
</form>
```

### Controller

```js
$scope.eventformvalidate = {
    rules: {
        Subject: {
            required: true
        }
    },
    messages: {
    },
    validateOnInit: true
};
```

It will call to elem.validate().form() if validateOnInit property is enabled



