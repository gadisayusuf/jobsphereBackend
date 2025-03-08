import { body, validationResult } from "express-validator";

export const jobCreateValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("type").notEmpty().withMessage("Type is required"),
  body("salary")
    .notEmpty()
    .withMessage("Salary is required")
    .isInt({ min: 1000 })
    .withMessage("Salary must be greater than 1000"),
  body("description").notEmpty().withMessage("Description is required"),
  body("company").notEmpty().withMessage("Company is required"),
  body("logo").trim(),
  body("isBookMarked")
    .isBoolean()
    .withMessage("Bookmark value must be Boolean"),
  body("location").notEmpty().withMessage("Location is required"),
  body("experienceLevel")
    .notEmpty()
    .withMessage("Which Experience level is needed"),
  body("currency").notEmpty().withMessage("Currency must be stated"),
];
export const jobUpdateValidator = [
  body("title").optional().notEmpty().withMessage("Title is required"),
  body("type").optional().notEmpty().withMessage("Type is required"),
  body("salary")
    .optional()
    .notEmpty()
    .withMessage("Salary is required")
    .isInt({ min: 1000 })
    .withMessage("Salary must be greater than 1000"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description is required"),
  body("company").optional().notEmpty().withMessage("Company is required"),
  body("logo").optional().trim(),
  body("isBookMarked")
    .optional()
    .isBoolean()
    .withMessage("Bookmark value must be Boolean"),
  body("location").optional().notEmpty().withMessage("Location is required"),
  body("experienceLevel")
    .optional()
    .notEmpty()
    .withMessage("Which Experience level is needed"),
  body("currency").optional().notEmpty().withMessage("Currency must be stated"),
];

export const userCreateValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is Required")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters long"),
  body("age")
    .notEmpty()
    .withMessage("Age is Required")
    .isInt({ min: 1 })
    .withMessage("Age must be a positive number"),
];

export const userUpdateValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Name is Required")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters long"),
  body("age")
    .optional()
    .notEmpty()
    .withMessage("Age is Required")
    .isInt({ min: 1 })
    .withMessage("Age must be a positive number"),
];

export const handleValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};