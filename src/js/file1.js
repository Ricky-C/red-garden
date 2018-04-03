var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

function pomLearn() {
	var pom = document.querySelector(".pom-learn");
	var fill1 = document.querySelector(".pom")
	pom.addEventListener("click", function () {
		fill1.classList.add("pom-info");
		
	});
}

function tomLearn() {
	var tom = document.querySelector(".tom-learn");
	var fill2 = document.querySelector(".tom")
	tom.addEventListener("click", function () {
		fill2.classList.add("tom-info");
	});
}

function cranLearn() {
	var cran = document.querySelector(".cran-learn");
	var fill3 = document.querySelector(".cran")
	cran.addEventListener("click", function () {
		fill3.classList.add("cran-info");
	});
}