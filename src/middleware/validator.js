import { body, validationResult } from "express-validator";

export const jobValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("type").notEmpty().withMessage("Type is required"),
  body("salary")
    .notEmpty()
    .withMessage("Salary is required")
    .isInt({ min: 0 })
    .withMessage("Salary must be greater than 0"),
  body("description").notEmpty().withMessage("Description is required"),
  body("company").notEmpty().withMessage("Company is required"),
  body("logo").isDataURI().withMessage("must be URI"),
  body("isBookMarked")
    .isBoolean()
    .withMessage("Bookmark value must be Boolean"),
  body("location").notEmpty().withMessage("Location is required"),
  body("experienceLevel")
    .notEmpty()
    .withMessage("Which Exprience level is needed"),
  body("currecy")
    .notEmpty()
    .withMessage("currency must be stated")
    .isCurrency()
    .withMessage("invalid currency"),
];

export const userValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is Required")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters long"),
  body("age")
    .notEmpty()
    .withMessage("Age is Required")
    .isInt({ min: 1 })
    .withMessage("age must be a positive number"),
];
