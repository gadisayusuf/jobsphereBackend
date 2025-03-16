import express from "express";
import {
  getJobs,
  getJobById,
  createJob,
  deleteJob,
  updateJob,
  filterJobs,
} from "../controllers/jobController.js";
import {
  jobCreateValidator,
  jobUpdateValidator,
} from "../validation/validator.js";
import { handleValidationResult } from "../middleware/validation.middleware.js";
const jobRuoter = express.Router();
jobRuoter.route("/filter").get(filterJobs);
jobRuoter
  .route("/")
  .get(getJobs)
  .post(jobCreateValidator, handleValidationResult, createJob);

jobRuoter
  .route("/:id")
  .get(getJobById)
  .delete(deleteJob)
  .patch(jobUpdateValidator, handleValidationResult, updateJob);

export default jobRuoter;
