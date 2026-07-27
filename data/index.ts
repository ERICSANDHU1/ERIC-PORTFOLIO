export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build autonomous AI agents that orchestrate LLMs and fine-tuned SLMs into products that ship.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Fast, async, and flexible across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My AI & web stack",
    description: "Always leveling up",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI engineer with a founder's obsession for shipping.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building mrk18 — an autonomous AI CMO",
    description: "A multi-agent system with a fine-tuned vLLM brain",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to build something intelligent together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];export const projects = [
  {
    id: 1,
    featured: true,
    live: true,
    title: "mrk18 — The AI CMO for Founders",
    des: "My flagship. An autonomous AI Chief Marketing Officer: drop a URL, get four honest verdicts — real competitors, positioning, funnel and ad audits. Built on a LangGraph agent system with a fine-tuned vLLM \"Brain\" (Qwen3-32B + 9 LoRA adapters) behind the paid tier.",
    img: "/mrk18.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/three.svg", "/fm.svg"],
    link: "https://mrk18.com",
    pinTitle: "mrk18.com",
  },
  {
    id: 2,
    live: true,
    title: "🧠 AI Voice-Based Learning Assistant",
    des: "Built a voice-interactive AI web app offering mock interviews, guided meditation, topic lectures, language skill practice, and Q&A preparation.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", ],
    link: "https://talkwise-ai-phi.vercel.app",
    pinTitle: "talkwise-ai",
  },
  {
    id: 3,
    live: true,
    title: "Animated Portfolio - 3D Website",
    des: "created the Professional Portfolio website, combining GSAP animations and Three.js 3D effects..",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
    link: "https://three-d-portfolio-theta.vercel.app/",
    pinTitle: "3D Portfolio",
  },
  {
    id: 4,
    title: "Daydreaming Detection — CNN Facial Analysis",
    des: "A full-stack computer-vision system that reads facial cues from an uploaded image and classifies mental state — daydreaming, depressive cues, or focused. Next.js frontend, Flask API pipeline: contrast + resize preprocessing, face detection, and a weighted scoring of head yaw, tilt, gaze, eye and lip state, returned with a confidence score.",
    img: "/daydreaming.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/ERICSANDHU1/daydreaming-Analyzer",
    pinTitle: "daydreaming",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Eric was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner.",
    name: "Vanshika",
    title: "Batchmate",
  },
  {
    quote:
      "Working with Eric was a seamless and inspiring experience. His eye for detail, creative vision, and technical expertise made the entire process smooth and results-driven. Eric doesn't just build — he elevates. I'd collaborate with him again in a heartbeat",
    name: "Adrian",
    title: "Client",
  },
  {
    quote:
      "Eric's commitment to excellence is unmatched. He brought clarity, innovation, and a strong sense of ownership to our project from day one. Beyond being technically gifted, he's incredibly professional and collaborative — a rare combination",
    name: "Cyrus",
    title: "Friend",
  },
  {
    quote:
      "Partnering with Eric was one of the best decisions for our digital project. His thoughtful approach, fast execution, and deep understanding of modern web development exceeded all expectations. He truly treats every project like his own.",
    name: " Shubhi ",
    title: "Batchmate ",
  },
  // {
  //   quote:
  //     "Collaborating with Eric was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eric's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner.",
  //   name: "VANSHIKA",
  //   title: "BatchMate",
  // },
];

export const companies = [
  {
    id: 1,
    name: "Convex",
    img: "/convex.svg",
    nameImg: "/convexname.jpg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Web Foundations",
    desc: "Started with semantic HTML, responsive CSS, and JavaScript — then went full-stack with the MERN stack, building REST APIs and CRUD apps end to end.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Modern Frontend — Next.js, Three.js & Motion",
    desc: "Shipped fast, interactive UIs with Next.js (App Router + SSR), immersive 3D via Three.js, and fluid animation with Framer Motion and GSAP.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "LLMs & Agentic AI",
    desc: "Went deep on LLMs and SLMs — LangGraph multi-agent systems, RAG, tool-calling, and fine-tuning small models with LoRA served on vLLM.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Building mrk18 — Autonomous AI CMO",
    desc: "Shipped a production multi-agent product: a FastAPI + LangGraph backend and a fine-tuned Qwen3-32B \"Brain\" (9 LoRA adapters) served via vLLM.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ERICSANDHU1",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/ERIC_FFX", // Replace with your Twitter handle
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/eric-sandhu-277b85307 ",
  },
];

