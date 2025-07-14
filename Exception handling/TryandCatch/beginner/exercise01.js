function parseNumber(str) {
  try {
    let number = parseInt(str);

    if (isNaN(number)) {
      throw new Error("Invalid format format");
    }

    console.log(number);
  } catch (error) {
    console.error("Oops! an error occured: ", error.message);
  }
}

parseNumber("20");
parseNumber("Hello");
