const { body } = require("express-validator");

const validationSchema = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Title is not provided")
      .isLength({ min: 2 })
      .withMessage("Title must be at least two characters"),

    body("price")
      .notEmpty()
      .withMessage("Price is not provided")
      .isNumeric()
      .withMessage("Price must be a number")
  ];
};

module.exports = {
  validationSchema
};