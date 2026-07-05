import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: "Open" }).sort({
      createdAt: -1,
    });

    res.json(jobs);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const seedJobs = async (req, res) => {
  try {
    const count = await Job.countDocuments();
    
    await Job.deleteMany({});

    const jobs = [
      {
        company: "Google",
        title: "Frontend Developer",
        location: "Bangalore",
        salary: "18 LPA",
        experience: "0-2 Years",
        type: "Full Time",
        skills: ["React", "JavaScript", "TypeScript"],
        description:
          "Build modern frontend applications using React and TypeScript.",
      },
      {
        company: "Amazon",
        title: "SDE I",
        location: "Pune",
        salary: "20 LPA",
        experience: "0-2 Years",
        type: "Full Time",
        skills: ["Java", "Spring Boot", "AWS"],
        description:
          "Develop scalable backend services for Amazon products.",
      },
      {
        company: "Microsoft",
        title: "Software Engineer",
        location: "Hyderabad",
        salary: "22 LPA",
        experience: "1-3 Years",
        type: "Full Time",
        skills: ["C#", ".NET", "Azure"],
        description:
          "Work on enterprise cloud products.",
      },
      {
        company: "Adobe",
        title: "React Developer",
        location: "Noida",
        salary: "16 LPA",
        experience: "0-2 Years",
        type: "Full Time",
        skills: ["React", "Redux", "CSS"],
        description:
          "Develop creative cloud web applications.",
      },
      {
        company: "Razorpay",
        title: "Frontend Engineer",
        location: "Bangalore",
        salary: "19 LPA",
        experience: "1-2 Years",
        type: "Full Time",
        skills: ["React", "Next.js", "Tailwind"],
        description:
          "Build India's best fintech experiences.",
      },
      {
      company: "Netflix",
      title: "Backend Engineer",
      location: "Remote",
      salary: "30 LPA",
      experience: "2-4 Years",
      type: "Remote",
      skills: ["Node.js", "MongoDB", "AWS"],
      description: "Build highly scalable backend services for Netflix."
    },
    {
      company: "Oracle",
      title: "Java Developer",
      location: "Bangalore",
      salary: "14 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["Java", "Spring Boot", "SQL"],
      description: "Develop enterprise cloud applications."
    },
    {
      company: "Salesforce",
      title: "Software Engineer",
      location: "Hyderabad",
      salary: "22 LPA",
      experience: "1-3 Years",
      type: "Full Time",
      skills: ["Java", "React", "REST APIs"],
      description: "Develop CRM platform features."
    },
    {
      company: "Uber",
      title: "Backend Engineer",
      location: "Bangalore",
      salary: "28 LPA",
      experience: "2-5 Years",
      type: "Full Time",
      skills: ["Go", "Microservices", "Kafka"],
      description: "Develop scalable ride-sharing services."
    },
    {
      company: "PhonePe",
      title: "Frontend Engineer",
      location: "Bangalore",
      salary: "18 LPA",
      experience: "1-3 Years",
      type: "Full Time",
      skills: ["React", "TypeScript", "Redux"],
      description: "Build fintech user experiences."
    },
    {
      company: "Flipkart",
      title: "SDE I",
      location: "Bangalore",
      salary: "19 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["Java", "Spring Boot", "Redis"],
      description: "Build India's largest e-commerce platform."
    },
    {
      company: "Paytm",
      title: "React Developer",
      location: "Noida",
      salary: "13 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["React", "JavaScript", "Tailwind CSS"],
      description: "Develop digital payment web applications."
    },
    {
      company: "Zoho",
      title: "Software Developer",
      location: "Chennai",
      salary: "11 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["Java", "SQL", "JavaScript"],
      description: "Build business productivity software."
    },
    {
      company: "Atlassian",
      title: "Frontend Developer",
      location: "Bangalore",
      salary: "24 LPA",
      experience: "1-3 Years",
      type: "Full Time",
      skills: ["React", "TypeScript", "GraphQL"],
      description: "Develop Jira and Confluence web applications."
    },
    {
      company: "Nvidia",
      title: "Software Engineer",
      location: "Pune",
      salary: "25 LPA",
      experience: "1-3 Years",
      type: "Full Time",
      skills: ["C++", "Python", "CUDA"],
      description: "Develop GPU computing software."
    },
    {
      company: "Intel",
      title: "Software Engineer",
      location: "Bangalore",
      salary: "18 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["Python", "C++", "Linux"],
      description: "Build software for next-generation processors."
    },
    {
      company: "TCS",
      title: "Frontend Developer",
      location: "Mumbai",
      salary: "6 LPA",
      experience: "0-1 Years",
      type: "Full Time",
      skills: ["HTML", "CSS", "React"],
      description: "Develop enterprise web portals."
    },
    {
      company: "Infosys",
      title: "React Developer",
      location: "Pune",
      salary: "7 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["React", "Redux", "REST APIs"],
      description: "Work on digital transformation projects."
    },
    {
      company: "Wipro",
      title: "Software Engineer",
      location: "Hyderabad",
      salary: "6.5 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["Java", "Spring", "SQL"],
      description: "Build enterprise software solutions."
    },
    {
      company: "Capgemini",
      title: "Frontend Engineer",
      location: "Pune",
      salary: "7 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["React", "JavaScript", "CSS"],
      description: "Develop responsive enterprise applications."
    },
    {
      company: "Accenture",
      title: "Full Stack Developer",
      location: "Mumbai",
      salary: "9 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["React", "Node.js", "MongoDB"],
      description: "Develop full-stack client solutions."
    },
    {
      company: "Meesho",
      title: "SDE I",
      location: "Bangalore",
      salary: "17 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["Java", "Spring Boot", "MySQL"],
      description: "Build e-commerce platform services."
    },
    {
      company: "Swiggy",
      title: "Backend Developer",
      location: "Bangalore",
      salary: "18 LPA",
      experience: "1-3 Years",
      type: "Full Time",
      skills: ["Node.js", "Redis", "Kafka"],
      description: "Develop food delivery backend services."
    },
    {
      company: "Zomato",
      title: "Frontend Engineer",
      location: "Gurgaon",
      salary: "17 LPA",
      experience: "1-3 Years",
      type: "Full Time",
      skills: ["React", "TypeScript", "Next.js"],
      description: "Build restaurant discovery experiences."
    },
    {
      company: "Deloitte",
      title: "Software Analyst",
      location: "Hyderabad",
      salary: "8 LPA",
      experience: "0-2 Years",
      type: "Full Time",
      skills: ["Java", "SQL", "JavaScript"],
      description: "Develop consulting technology solutions."
    }
    ];

    await Job.insertMany(jobs);

    res.json({
      message: "Jobs seeded successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};