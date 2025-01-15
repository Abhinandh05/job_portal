import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

const EditJob = () => {
  const { jobId } = useParams();
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { companies } = useSelector((store) => store.company);

  useEffect(() => {
    // Fetch the job details
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/job/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          const job = res.data.job;
          setInput({
            title: job.title,
            description: job.description,
            requirements: job.requirements.join(","),
            salary: job.salary,
            location: job.location,
            jobType: job.jobType,
            experience: job.experienceLevel,
            position: job.position,
            companyId: job.company._id,
          });
        }
      } catch (error) {
        toast.error("Failed to fetch job details.");
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany?._id || "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(
        `${JOB_API_END_POINT}/job/${jobId}`,
        input,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success("Job updated successfully");
        navigate(`/jobs/${jobId}`);
      } else {
        toast.error("Failed to update job");
      }
    } catch (error) {
      toast.error("An error occurred while updating the job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Edit Job</h2>
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>No of Positions</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
              />
            </div>
            {companies.length > 0 && (
              <div>
                <Label>Company</Label>
                <Select onValueChange={selectChangeHandler}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        companies.find(
                          (company) => company._id === input.companyId
                        )?.name || "Select a Company"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem
                          key={company._id}
                          value={company.name.toLowerCase()}
                        >
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <div className="mt-6">
            {loading ? (
              <Button className="w-full">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Update Job
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
