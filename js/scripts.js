/* 
HTML includes via fetch()
  This only works if you visit the site in 
  the browser by using the Live view function, which 
  uses IP adresses, like http://.......
  or if you open the site in the browser after uploading
  to the Hanze server (also http://........)
  So, it doesn't work if you open the file from your 
  laptop in the browser (users/document/ect....)
 */

/* 
Example: This loads menu.html into the HTML element <nav>
=====================================================
*/
fetch('menu.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('nav').innerHTML = data;
	});

/* 
Example (not used): loads footer.html into the HTML element <footer> 
=====================================================
*/
fetch('footer.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('footer').innerHTML = data;
	});

/* 
BONUS!!! Stick an ".active" class 
on the menu link of the current page!!!
In this case, it looks for all the links (a) 
in the container with the ID of "menu"
=====================================================
*/
function setActive() {
	linkObj = document.querySelectorAll('#menu a');
	for (i = 0; i < linkObj.length; i++) {
		if (document.location.href.indexOf(linkObj[i].href) >= 0) {
			linkObj[i].classList.add('active');
		}
	}
}
window.onload = function() {
	setTimeout(function() {
		setActive();
	}, 500);
};