import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  salary: { type: Number, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  logo: { type: String},
  isBookMarked: { type: Boolean, default: false },
  location: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  currency: { type: String, required: true },
});

const jobModel = mongoose.model("jobs", jobSchema);

export default jobModel;
