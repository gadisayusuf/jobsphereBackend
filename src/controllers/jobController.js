import jobModel from "../models/jobModel.js";

export const createJob = async (req, res) => {
  try {
    const job = await jobModel.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.json(jobs);
  } catch (err) {
    console.log("getjobs error:", err);
    res.status(500).json(err);
  }
};

export const getJobById = async (req, res) => {
  const searchId = req.params.id;
  try {
    const job = await jobModel.findById(searchId);
    res.status(200).json(job);
  } catch (err) {
    console.log("getjobbyId error:", err);
    res.status(500).send({ message: "Can't find the job", error: err });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await jobModel.findByIdAndDelete(id);
    res.json({ job, message: "Job deleted successfully" });
  } catch (err) {
    console.log("deleteJob error:", err);
    res.status(500).send({ message: "Failed to delete job", error: err });
  }
};

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJob = await jobModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(updatedJob);
  } catch (err) {
    console.log("updateJob error:", err);
    res.status(500).json({ message: "Failed to update job", error: err });
  }
};
export const filterJobs = async (req, res) => {
  try {
    const filters = req.query;
    const jobs = await jobModel.find(filters);
    res.json(jobs);
  } catch (err) {
    console.log("filterJobs error:", err);
    res.status(500).json(err);
  }
};
