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



