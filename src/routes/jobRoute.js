import express from "express";
import {
  getJobs,
  getJobById,
  createJob,
  deleteJob,
  updateJob,
} from "../controllers/jobController.js";
import { jobValidator } from "../middleware/validator.js";

const jobRuoter = express.Router();

jobRuoter.route("/").get(getJobs).post(jobValidator, createJob);

jobRuoter.route("/:id").get(getJobById).delete(deleteJob).patch(updateJob);

export default jobRuoter;
