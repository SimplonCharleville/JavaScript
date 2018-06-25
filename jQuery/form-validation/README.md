# jQuery validation form
### You must not modify the HTML and CSS files.
### You must comment your code IN ENGLISH! and as usual indent it
### You must push your code on gitHub

## Step 1

Starting from the page "form.html", develop the form validation script with jQuery.<br>
Put your code in js/scripts.js (you will use the included function validateEmail() to validate the e-mail fields).

The fieldset "Your colleague subscription" is hidden by default. By clicking on the checkbox "Subscribe another company member", the fieldset appears and the fields inside must also be treated by your function.<br>
If you uncheck the checkbox, it disappears and so fields can be empty.

If required fields are empty/invalid, apply them a class "error". For checkboxes and radio buttons, apply this class to the previous div.
Delete this class once all is filled/checked.

## Step 2

Using Ajax, post the form values to the existing file "post.php" and replace in the HTML page the "form" with the returned data ("post.php" returns an array with data).

**Tip:** use serialize() or serializeArray() methods before to send form data with Ajax<br>
**Bonus:** return values in HTML instead of the PHP array (you need to modify the "post.php" file).
