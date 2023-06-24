function addContact() {
  let _cName = document.querySelector("#name").value.toUpperCase();
  let _cNumber = document.querySelector("#number").value;
  let _displayNotification = document.querySelector("#displayNoti");

  if (_cName == "" || _cNumber == "") {
    _displayNotification.innerHTML = "Please enter details !";
    _displayNotification.style.color = "red";
  } else {
    // Set Items
    localStorage.setItem(_cName, _cNumber);
    _displayNotification.innerHTML = "✓ Successfully Added New Contact ";
    _displayNotification.style.color = "green";
  }
  setInterval(() => {
    _displayNotification.innerHTML = "";
  }, 2000);
  _cName = document.querySelector("#name").value = "";
  _cNumber = document.querySelector("#number").value = "";
  _cName = document.querySelector("#name").focus();
}

function getContact() {
  let _displayDetail = document.getElementById("displayContact");
  let _displayOutput = document.getElementById("displayContact");
  _displayOutput.classList.add("displayContactStyle");
  let getContactName = document
    .querySelector("#getContactName")
    .value.toUpperCase();

  let _output = localStorage.getItem(getContactName);
  _displayDetail.innerHTML = `${getContactName} : ${
    _output == null ? "This contact detail is not added" : `+98 ${_output}`
  }`;
  getContactName = document.querySelector("#getContactName").value = "";
}

function reset() {
  location.reload();
  localStorage.clear();
}
////////////

let allError = [...document.getElementsByClassName("errorReq")];
allError.map((item) => {
  item.style.cssText = "transform:scale(0)";
});
let inp = document.getElementsByTagName("input");

for (i = 0; i < inp.length; i++) {
  let name = document.getElementById("name");
  let number = document.getElementById("number");
  let getContactName = document.getElementById("getContactName");

  inp[i].addEventListener("input", function () {
    if (this.getAttribute("id") == name.getAttribute("id")) {
      this.nextElementSibling.style.cssText = "transform:scale(0)";

      if (
        this.value.search(/[ا-ی]/i) != -1 ||
        this.value.search(/[0-9]/) != -1 ||
        this.value.search(/[!@#$%^&*()-=+|\s/;'",>?/<]/) != -1
      ) {
        this.nextElementSibling.style.cssText = "transform:scale(1);color:red";
      }
    }

    if (this.getAttribute("id") == getContactName.getAttribute("id")) {
      this.nextElementSibling.style.cssText = "transform:scale(0)";
      if (
        this.value.search(/[ا-ی]/i) != -1 ||
        this.value.search(/[0-9]/) != -1
      ) {
        this.nextElementSibling.style.cssText = "transform:scale(1);color:red";
      }
    }

    if (this.getAttribute("id") == number.getAttribute("id")) {
      this.nextElementSibling.style.cssText = "transform:scale(0)";
      if (
        this.value.search(/[ا-ی]/i) != -1 ||
        this.value.search(/[a-z]/) != -1
      ) {
        this.nextElementSibling.style.cssText = "transform:scale(1);color:red";
      }
    }
  });
}
