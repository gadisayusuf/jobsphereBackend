import jobModel from "../models/jobModel.js";

export const createJob = async (req, res) => {
  try {
    const job = await jobModel.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    console.log(err);
    res.error(err);
  }
};
export const getJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.json(jobs);
  } catch (err) {
    console.log("getjobs error:", err);
    res.error(err);
  }
};
export const getJobById = async (req, res) => {
  const searchId = req.params.id;
  try {
    const job = await jobModel.findById(searchId);
    res.status(201).json(job);
  } catch (err) {
    console.log("getjobbyId error:", err);
    res.error(err);
  }
};
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findByIdAndDelete(id);
    res.send(job, "job deleted successfully");
  } catch (err) {
    res.error("Failed to delete job", err);
  }
};

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJob = await jobModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updatedJob);
  } catch (err) {
    console.log(err);
    res.send("Failed to updateJob");
  }
};
