import express from "express";
import { getJobs, getJobById, createJob } from "../controllers/jobController.js";
import { jobValidator } from "../middleware/validator.js";

const jobRuoter = express.Router();

jobRuoter.get("/", getJobs);
jobRuoter.get("/:id", getJobById);
jobRuoter.post("/", jobValidator, createJob);

export default jobRuoter;
