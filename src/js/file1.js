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
		fill1.innerHTML = "Pomegranates help our body in many ways from curing stomach problems to improving erectile dysfunctions and more.";
		fill1.style.cssText = "padding-right: 5px; padding-top: 10px; max-width: 100%;";
		
	});
}

function tomLearn() {
	var tom = document.querySelector(".tom-learn");
	var fill2 = document.querySelector(".tom")
	tom.addEventListener("click", function () {
		fill2.classList.add("tom-info");
		fill2.innerHTML = "The health benefits of tomatoes include eye care, good stomach health, and a reduced blood pressure and relief from diabetes.";
		fill2.style.cssText = "padding-right: 5px; padding-top: 10px;";
	});
}

function cranLearn() {
	var cran = document.querySelector(".cran-learn");
	var fill3 = document.querySelector(".cran")
	cran.addEventListener("click", function () {
		fill3.classList.add("cran-info");
		fill3.innerHTML = "The health benefits of cranberries include relief from UTIs, respiratory disorders, kidney stones, cancer, and heart diseases.";
		fill3.style.cssText = "padding-right: 5px; padding-top: 10px;";
	});
}

