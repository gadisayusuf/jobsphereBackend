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
  handleValidationResult,
  jobCreateValidator,
  jobUpdateValidator,
} from "../middleware/validator.js";

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
