module.exports = (req, res, next) => {
  if (Object.keys(req.query).length === 0) {
    //If there's no query

    res.send("Lack of Parameter");
  } else if (isNaN(req.query["number"]) || req.length > 1) {
    //If typeof query <number> isn't a number or exists more than one query

    res.send("Wrong Parameter, you should enter a positive integer");
  } else if (req.query["number"] < 0 || req.query["number"] === "") {
    //If <number> is not a positive integer
    res.send("Input should be a positive integer");
  } else {
    //Calculate sum from 1 to number
    const number = +req.query["number"];
    let sumFromOneToNumber = ((1 + number) * number) / 2;

    if (sumFromOneToNumber > 2 ** 53 - 1) {
      // If the answer is greater than 2^53-1, convert the answer to BigInt
      sumFromOneToNumber = BigInt(sumFromOneToNumber);
    }

    res.send(`Sum from 1 to ${number} is ${sumFromOneToNumber}`);
  }
};
