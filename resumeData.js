// Resume & Portfolio Data for Barnala Chakravardhan Rao (BCVSVU)

const resumeData = {
  personalInfo: {
    fullName: "Barnala Chakravardhan Rao",
    brandName: "BCVSVU",
    title: "3rd Year B.Tech CSE Student • Chief Technology Officer @ IGNITE Club",
    college: "Sri Venkateswara University (SVU), Tirupati",
    location: "Andhra Pradesh, India",
    email: "barnalachakravardhan@gmail.com",
    techEmail: "tech.team.svti@gmail.com",
    phone: "+91 6305706263",
    portfolio: "https://www.kattaseemaruchulu.in",
    summary: "Resourceful 3rd-year Computer Science Engineering student and Chief Technology Officer at IGNITE Club, SVU. Combines core programming fundamentals with modern AI-assisted workflows to build and deploy functional web products. Experienced in database management, payment gateway integration, and shipping real-world digital tools for students and local businesses."
  },
  
  experience: [
    {
      role: "Chief Technology Officer (CTO)",
      organization: "IGNITE Club, Sri Venkateswara University",
      period: "April 2026 – Present",
      bullets: [
        "Oversee technical initiatives, project deployment, and platform coordination for university student programs.",
        "Guide peer developers on leveraging web tools and AI-assisted workflows to launch projects efficiently."
      ]
    }
  ],

  achievements: [
    {
      title: "Special Mention — IMUN 2k25",
      event: "Ignite Model United Nations 2k25, KCR",
      category: "Leadership & Public Speaking",
      year: "2025"
    },
    {
      title: "Campus Rank 5 — IEO 2019",
      event: "International English Olympiad",
      category: "Academic Excellence",
      year: "2019"
    }
  ],

  projects: [
    {
      id: "katta",
      rank: 1,
      title: "Katta's Seema Ruchulu Web Platform",
      subtitle: "Direct-to-Consumer Online Ordering Platform",
      domain: "www.kattaseemaruchulu.in",
      url: "https://www.kattaseemaruchulu.in",
      tech: ["HTML5", "CSS3", "JavaScript", "Razorpay Gateway", "Sales Analytics"],
      bullets: [
        "Built and deployed a direct-to-consumer online ordering website to save the business owner heavy commissions from food aggregators.",
        "Integrated Razorpay Payment Gateway to automate online order payments and streamline checkout.",
        "Configured custom administrative data access, enabling the owner to directly monitor user activity and sales analytics."
      ]
    },
    {
      id: "seatgenie",
      rank: 2,
      title: "SeatGenie — AI Counseling Chatbot",
      subtitle: "Interactive AI Exam & College Matching Assistant",
      domain: "seatgenie.vercel.app",
      url: "https://seatgenie.vercel.app",
      tech: ["AI Chatbot", "Vercel", "Web Options", "Rank College Matching"],
      bullets: [
        "Developed an interactive AI counseling assistant for state and national entrance exams (NEET, JEE, AP/TS EAPCET).",
        "Configured rank-based college matching features to assist students with web options auditing and college comparisons."
      ]
    },
    {
      id: "timetable",
      rank: 3,
      title: "Timetable Generator",
      subtitle: "Automated Academic Slot & Room Allocation Engine",
      domain: "instanttimetable.pages.dev",
      url: "https://instanttimetable.pages.dev",
      tech: ["Algorithm Design", "Python/Web", "Slot Allocation", "Room Scheduling"],
      bullets: [
        "Engineered an automated timetable generator to optimize class schedules, room allocations, and faculty conflict resolution.",
        "Created an intuitive interactive interface for quick schedule auditing and instant export.",
        "Built for scalable academic schedule management at university level."
      ]
    }
  ],

  skills: {
    programming: ["C", "HTML5", "CSS3", "SQL", "C++", "Python"],
    workflows: ["AI-Assisted Development", "Rapid Prototyping", "Web Deployment"],
    tools: ["Supabase", "Razorpay Payment Gateway", "Vercel", "Cloudflare Workers", "Git"],
    spokenLanguages: ["Telugu", "Hindi", "English (Full Fluency: Read, Write, Speak, Understand)"],
    leadership: ["Tech Strategy", "Technical Event Management", "Project Planning"]
  },

  education: [
    {
      institution: "Sri Venkateswara University",
      degree: "B.Tech in Computer Science and Engineering — 3rd Year",
      period: "Graduation: 2028",
      score: "3rd Year"
    },
    {
      institution: "Sri Chaitanya Junior Kalasala",
      degree: "Class 12 / Intermediate Education",
      period: "Completed",
      score: "96.2%"
    },
    {
      institution: "Sri Chaitanya Techno School",
      degree: "Class 10 / Secondary School Certificate (SSC)",
      period: "Completed",
      score: "10.0 GPA"
    }
  ]
};

export default resumeData;
