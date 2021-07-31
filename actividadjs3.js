function validateAge() {
  let userage = document.getElementById("userage").value;
  if (userage >= 18) {
    alert("Puede ingresar al sitio");
  } else {
    alert("No puede ingresar");
  }
}

function maxAge(e) {
  e.preventDefault();
  let age1 = document.getElementById("userage1").value;
  let age2 = document.getElementById("userage2").value;
  let age3 = document.getElementById("userage3").value;

  let arr = [age1, age2, age3];
  let arrSorted = arr.sort((a, b) => b - a);

  document.getElementById("result").innerHTML = `La edad mayor es ${arrSorted[0]}`;
}
