function submit() {
  const name = document.getElementById("name");
  const age = document.getElementById("age");

  const result = document.getElementById("result");

  //Name & Age
  result.textContent = `Name: ${name}`;
  result.textContent = `Age: ${age}`;

  //Text Area
  const textArea = document.getElementById("text");
  const text = document.getElementById("result");

  const wordLimit = 50;

  textArea.addEventListener("input", function () {
    const count = textArea.value.length;
    const remaining = wordLimit - count;
    text.textContent = `Characters: ${count} | Remaining: ${remaining}`;
  });

  //Gender
  let gender = "";
  const genderRadios = document.getElementsByName("gender");

  genderRadios.forEach((radio) => {
    if (radio.checked) {
      gender = radio.value;
    }
  });

  //Rating
  const dropdown = document.getElementById("rating").value;
  if (dropdown) {
    result.textContent = `Thanks for the feedback: ${dropdown}`;
  } else {
    result.textContent = `Please select a option to help improve us`;
  }

  //checkbox
  const checkbox = document.getElementById("checkbox");

  if (!checkbox) {
    result.textContent = "Agree to the terms and conditions";
    result.style.color = "red";
  } else {
    result.textContent = "Thank you";
    result.style.color = "green";
  }
}
