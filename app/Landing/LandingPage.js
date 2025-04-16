"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChild,
  FaGamepad,
  FaCode,
  FaStar,
  FaLaptopCode,
  FaRegSmile,
  FaRegLightbulb,
  FaUsers,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { PiStudentBold, PiCertificateBold } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";
import { BsRobot, BsFillPatchCheckFill, BsArrowRight } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineScience, MdSecurity } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

// Animated floating shapes component with more variety
const FloatingShapes = () => {
  const shapes = [
    {
      color: "bg-[#FF9E5E]",
      size: "w-16 h-16",
      position: "top-1/4 left-1/5",
      shape: "rounded-full",
    },
    {
      color: "bg-[#6C5CE7]",
      size: "w-24 h-24",
      position: "top-1/3 right-1/4",
      shape: "rounded-lg",
    },
    {
      color: "bg-[#00B894]",
      size: "w-20 h-20",
      position: "bottom-1/4 left-1/3",
      shape: "rounded-full",
    },
    {
      color: "bg-[#FD79A8]",
      size: "w-12 h-12",
      position: "bottom-1/3 right-1/5",
      shape: "rounded-lg",
    },
    {
      color: "bg-[#FFD166]",
      size: "w-14 h-14",
      position: "top-1/5 right-1/6",
      shape: "rounded-full",
    },
    {
      color: "bg-[#118AB2]",
      size: "w-18 h-18",
      position: "bottom-1/5 left-1/6",
      shape: "rounded-lg",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} ${shape.size} ${shape.position} ${shape.shape} opacity-20`}
          animate={{
            y: [0, -30, 0, -20, 0],
            x: [0, 15, -10, 20, 0],
            rotate: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: 10 + index * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced confetti with more variety
const Confetti = () => {
  const shapes = ["rounded-sm", "rounded-full", "rounded-none"];
  const items = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100 - 100,
    },
    rotation: Math.random() * 360,
    size: Math.random() * 12 + 5,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.shape}`}
          style={{
            backgroundColor: item.color,
            width: `${item.size}px`,
            height: `${item.size * (Math.random() * 0.5 + 0.5)}px`,
            left: `${item.position.x}%`,
            top: `${item.position.y}%`,
            rotate: item.rotation,
          }}
          animate={{
            y: [item.position.y, item.position.y + 200],
            x: [item.position.x, item.position.x + (Math.random() * 60 - 30)],
            opacity: [1, 0],
            rotate: [
              item.rotation,
              item.rotation + (Math.random() > 0.5 ? 360 : -360),
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 8,
          }}
        />
      ))}
    </div>
  );
};

// New component for animated progress bar
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        className="bg-[#6C5CE7] h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

// New component for animated counter
const AnimatedCounter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

 // Enhanced courses data with more details
 export const courses = {
  "5-7": [
    {
      title: "Code with Blocks",
      icon: <FaGamepad className="text-2xl" />,
      skills: [
        "Drag-and-drop coding",
        "Basic logic",
        "Fun puzzles",
        "Storytelling",
        "Pattern recognition",
      ],
      duration: "6 weeks",
      projects: [
        "Build a digital story",
        "Create simple games",
        "Animate characters",
        "Interactive cards",
      ],
      color: "bg-[#FF9E5E]",
      level: "Beginner",
      outcomes: [
        "Computational thinking",
        "Problem-solving basics",
        "Digital creativity",
      ],
    },
    {
      title: "Robot Buddies",
      icon: <BsRobot className="text-2xl" />,
      skills: [
        "Simple robotics",
        "Team projects",
        "Creative thinking",
        "Basic electronics",
        "Sequencing",
      ],
      duration: "8 weeks",
      projects: [
        "Program a robot dance",
        "Build a maze solver",
        "Create a robotic pet",
        "Design a delivery bot",
      ],
      color: "bg-[#6C5CE7]",
      level: "Beginner",
      outcomes: [
        "Hands-on engineering",
        "Collaboration skills",
        "Logical sequencing",
      ],
    },
    {
      title: "Robot Buddies 2",
      icon: <BsRobot className="text-2xl" />,
      skills: [
        "Simple robotics",
        "Team projects",
        "Creative thinking",
        "Basic electronics",
        "Sequencing",
      ],
      duration: "8 weeks",
      projects: [
        "Program a robot dance",
        "Build a maze solver",
        "Create a robotic pet",
        "Design a delivery bot",
      ],
      color: "bg-[#6C5CE7]",
      level: "Beginner",
      outcomes: [
        "Hands-on engineering",
        "Collaboration skills",
        "Logical sequencing",
      ],
    },
  ],
  "8-10": [
    {
      title: "Scratch Adventures",
      icon: <FaLaptopCode className="text-2xl" />,
      skills: [
        "Game development",
        "Animation basics",
        "Interactive stories",
        "Event handling",
        "Variables",
      ],
      duration: "10 weeks",
      projects: [
        "Create your first game",
        "Animate a cartoon",
        "Build a quiz app",
        "Design an interactive story",
      ],
      color: "bg-[#00B894]",
      level: "Intermediate",
      outcomes: [
        "Creative expression",
        "Algorithmic thinking",
        "Project planning",
      ],
    },
    {
      title: "Web Wizards",
      icon: <FaCode className="text-2xl" />,
      skills: [
        "HTML/CSS basics",
        "Creative design",
        "Simple JavaScript",
        "Responsive layouts",
        "Debugging",
      ],
      duration: "12 weeks",
      projects: [
        "Build a personal website",
        "Design a digital poster",
        "Create a meme generator",
        "Code a birthday card",
      ],
      color: "bg-[#FD79A8]",
      level: "Intermediate",
      outcomes: ["Web fundamentals", "Design principles", "Creative coding"],
    },
  ],
  "11-13": [
    {
      title: "Python Playground",
      icon: <FaCode className="text-2xl" />,
      skills: [
        "Python fundamentals",
        "Problem solving",
        "Game development",
        "Functions",
        "Loops & conditionals",
      ],
      duration: "12 weeks",
      projects: [
        "Create a calculator",
        "Build a text adventure game",
        "Develop a weather app",
        "Code a password generator",
      ],
      color: "bg-[#6C5CE7]",
      level: "Advanced",
      outcomes: [
        "Text-based coding",
        "Logical reasoning",
        "Algorithm design",
      ],
    },
    {
      title: "App Inventors",
      icon: <IoMdSchool className="text-2xl" />,
      skills: [
        "Mobile app basics",
        "UI design",
        "Logical thinking",
        "APIs",
        "User experience",
      ],
      duration: "14 weeks",
      projects: [
        "Design a weather app",
        "Create a quiz application",
        "Build a fitness tracker",
        "Develop a study planner",
      ],
      color: "bg-[#00B894]",
      level: "Advanced",
      outcomes: [
        "Mobile development",
        "User-centered design",
        "Real-world problem solving",
      ],
    },
  ],
  "14-16": [
    {
      title: "AI Explorers",
      icon: <BsRobot className="text-2xl" />,
      skills: [
        "Machine learning basics",
        "Data analysis",
        "Ethical AI",
        "Neural networks",
        "Model training",
      ],
      duration: "16 weeks",
      projects: [
        "Train a simple AI model",
        "Analyze real-world data",
        "Create a recommendation system",
        "Build a chatbot",
      ],
      color: "bg-[#FF9E5E]",
      level: "Expert",
      outcomes: ["AI fundamentals", "Data literacy", "Future tech skills"],
    },
    {
      title: "Web Warriors",
      icon: <FaLaptopCode className="text-2xl" />,
      skills: [
        "Full-stack basics",
        "APIs",
        "Project management",
        "Databases",
        "Authentication",
      ],
      duration: "14 weeks",
      projects: [
        "Build a blog with CMS",
        "Create a weather dashboard",
        "Develop a task manager",
        "Code a social media clone",
      ],
      color: "bg-[#FD79A8]",
      level: "Expert",
      outcomes: [
        "Professional development",
        "Team collaboration",
        "Portfolio projects",
      ],
    },
  ],
};

export default function Home() {
  const [activeAge, setActiveAge] = useState("5-7");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const chatMessagesRef = useRef(null);

  // Age Groups with more descriptive labels
  const ageGroups = [
    {
      range: "5-7",
      icon: <FaChild className="text-2xl" />,
      color: "bg-[#FF9E5E]",
      label: "Little Explorers",
      description: "Foundational skills through play",
    },
    {
      range: "8-10",
      icon: <FaGamepad className="text-2xl" />,
      color: "bg-[#6C5CE7]",
      label: "Junior Coders",
      description: "Creative projects & problem-solving",
    },
    {
      range: "11-13",
      icon: <PiStudentBold className="text-2xl" />,
      color: "bg-[#00B894]",
      label: "Tech Wizards",
      description: "Advanced concepts & real-world apps",
    },
    {
      range: "14-16",
      icon: <FaStar className="text-2xl" />,
      color: "bg-[#FD79A8]",
      label: "Future Innovators",
      description: "Specialized tech pathways to build career",
    },
  ];

  // Enhanced features with more details
  const features = [
    {
      title: "Game-Based Learning",
      description:
        "Kids learn through interactive games and challenges that make complex concepts fun and accessible",
      icon: <FaGamepad className="text-3xl" />,
      color: "text-[#6C5CE7]",
      bg: "bg-[#6C5CE7]/10",
    },
    {
      title: "Project Portfolio",
      description:
        "Every student builds a portfolio of real projects they can showcase to schools and future employers",
      icon: <PiCertificateBold className="text-3xl" />,
      color: "text-[#00B894]",
      bg: "bg-[#00B894]/10",
    },
    {
      title: "Small Class Sizes",
      description:
        "Maximum 6 students per teacher for personalized attention and tailored learning experiences",
      icon: <FaUsers className="text-3xl" />,
      color: "text-[#FD79A8]",
      bg: "bg-[#FD79A8]/10",
    },
    {
      title: "Creative Freedom",
      description:
        "Students choose projects based on their interests, keeping them engaged and motivated",
      icon: <FaRegLightbulb className="text-3xl" />,
      color: "text-[#FF9E5E]",
      bg: "bg-[#FF9E5E]/10",
    },
    {
      title: "STEM Integration",
      description:
        "Our curriculum connects coding with science, math and engineering for holistic learning",
      icon: <MdOutlineScience className="text-3xl" />,
      color: "text-[#118AB2]",
      bg: "bg-[#118AB2]/10",
    },
    {
      title: "Safe Environment",
      description:
        "COPPA-compliant platform with no ads and strict privacy controls for young learners",
      icon: <MdSecurity className="text-3xl" />,
      color: "text-[#6C5CE7]",
      bg: "bg-[#6C5CE7]/10",
    },
  ];

  // Enhanced testimonials with avatars
  const testimonials = [
    {
      name: "Sophia's Mom",
      role: "Parent of 8-year-old",
      quote:
        "My daughter went from playing games to creating them in just 3 months! She's now teaching her little brother to code.",
      rating: 5,
      avatar: "/avatars/1.png",
    },
    {
      name: "Raj's Dad",
      role: "Parent of 11-year-old",
      quote:
        "The teachers make complex concepts so accessible for kids. Raj built his first app after just 8 weeks and won a school competition!",
      rating: 5,
      avatar: "/avatars/2.png",
    },
    {
      name: "Emma's Parents",
      role: "Parents of 6-year-old",
      quote:
        "Our shy daughter has gained so much confidence through coding. She loves her classes and can't wait to show us her new creations each week.",
      rating: 5,
      avatar: "/avatars/3.png",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What's the right age to start coding?",
      answer:
        "Children as young as 5 can start with basic concepts through visual programming. Our youngest students begin with drag-and-drop coding that teaches logic without needing to read or type complex syntax.",
    },
    {
      question: "How much screen time is involved?",
      answer:
        "We balance screen time with offline activities. Classes include 60% hands-on coding and 40% conceptual learning through games, discussions, and physical computing with robots or other devices.",
    },
    {
      question: "What if my child has no prior experience?",
      answer:
        "No problem! 80% of our students start as complete beginners. Our curriculum is designed to meet each child at their current level and progress at their own pace.",
    },
    {
      question: "How do you keep kids engaged?",
      answer:
        "We use game-based learning, project-based curriculum, and let students work on projects they're passionate about. Our teachers are specially trained in engaging young learners.",
    },
    {
      question: "What technology do we need at home?",
      answer:
        "Just a computer with internet access. We provide all software and tools through our cloud-based platform that works on any device.",
    },
  ];

  // Stats data
  const stats = [
    { value: <AnimatedCounter target={5000} />, label: "Students Enrolled" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: <AnimatedCounter target={100} />, label: "Expert Instructors" },
    { value: <AnimatedCounter target={50} />, label: "Schools Partnered" },
  ];

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current && isChatOpen) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [isChatOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-[#E3F2FD]">
      {showConfetti && <Confetti />}

      {/* Floating chat button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-[#6C5CE7] text-white p-4 rounded-full shadow-xl z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <RiCustomerService2Fill className="text-2xl" />
      </motion.button>

      {/* Chat popup */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-8 w-80 bg-white rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col"
            style={{ height: "60vh" }}
          >
            <div className="bg-[#6C5CE7] text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Chat with us</h3>
              <button onClick={toggleChat} className="text-white">
                ×
              </button>
            </div>
            <div
              ref={chatMessagesRef}
              className="flex-1 p-4 overflow-y-auto bg-gray-50"
            >
              <div className="mb-4">
                <div className="bg-[#6C5CE7]/10 p-3 rounded-lg max-w-xs">
                  <p className="text-sm">
                    Hi there! 👋 How can we help you today?
                  </p>
                </div>
              </div>
              <div className="mb-4 flex justify-end">
                <div className="bg-[#6C5CE7] text-white p-3 rounded-lg max-w-xs">
                  <p className="text-sm">
                    I have a question about courses for my 8-year-old
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="bg-[#6C5CE7]/10 p-3 rounded-lg max-w-xs">
                  <p className="text-sm">
                    Great! Our Junior Coders program is perfect for that age.
                    Would you like me to send you more details?
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                />
                <button className="bg-[#6C5CE7] text-white p-2 rounded-lg">
                  <BsArrowRight />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Typically replies in under 5 minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== NAVIGATION ===== */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 z-50"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] flex items-center justify-center text-white">
              <FaCode />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] bg-clip-text text-transparent">
              KidsMate
            </span>
          </motion.div>

          {/* Mobile menu button - aligned to the right */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <a
              href="#courses"
              className="font-medium hover:text-[#6C5CE7] transition-colors"
            >
              Courses
            </a>
            <a
              href="#how-it-works"
              className="font-medium hover:text-[#6C5CE7] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="font-medium hover:text-[#6C5CE7] transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#faq"
              className="font-medium hover:text-[#6C5CE7] transition-colors"
            >
              FAQ
            </a>
          </div>

          <Link href="/#courses-display" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              Join Course
            </motion.button>
          </Link>
        </div>

        {/* Mobile Navigation - non-transparent background */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white shadow-lg absolute top-0 left-0 w-full pt-16"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                <a
                  href="#courses"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6C5CE7] hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </a>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6C5CE7] hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6C5CE7] hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Success Stories
                </a>
                <a
                  href="#faq"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6C5CE7] hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                <Link href="/Register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-2 bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Course
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <header className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <FloatingShapes />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8]">
                Coding Made Magical
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Where kids transform from tech users to tech creators through
              play-based learning!
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const AgeSection = document.getElementById("age-selector");
                  AgeSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] hover:from-[#5649C7] hover:to-[#E84393] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl flex items-center justify-center gap-2"
              >
                <span>
                  <Image
                    src="/emoji.png"
                    alt="emoji"
                    width={48}
                    height={48}
                    className="w-6 h-6"
                  />
                </span>
                Book Free Trial
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const section = document.getElementById("age-selector");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Explore Courses
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-[#6C5CE7] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="w-96 h-96 bg-[#FD79A8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="w-96 h-96 bg-[#FF9E5E] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          </div>
        </motion.div>
      </header>

      {/* ===== STATS SECTION ===== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#6C5CE7] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AGE SELECTOR ===== */}
      <section id="age-selector" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] bg-clip-text text-transparent">
                Age-Appropriate Learning Paths
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our curriculum grows with your child, from first clicks to
              advanced projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {ageGroups.map((group) => (
              <motion.div
                key={group.range}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * ageGroups.indexOf(group) }}
              >
                <motion.button
                  onClick={() => {
                    setActiveAge(group.range);
                    // Smooth scroll to courses section
                    setTimeout(() => {
                      document
                        .getElementById("courses-display")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 100);
                  }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    group.color
                  } p-6 rounded-xl shadow-md text-white text-center transition-all w-full ${
                    activeAge === group.range
                      ? "ring-4 ring-white scale-105 z-10"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-3">{group.icon}</div>
                    <span className="font-bold text-xl">{group.range}</span>
                    <span className="text-sm">years old</span>
                    <span className="mt-2 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                      {group.label}
                    </span>
                    <span className="mt-1 text-xs opacity-80">
                      {group.description}
                    </span>
                  </div>
                </motion.button>

                {/* Animated down arrow indicator */}
                <motion.div
                  className={`mt-2 ${
                    activeAge === group.range ? "opacity-100" : "opacity-20"
                  }`}
                  animate={
                    activeAge === group.range
                      ? {
                          y: [0, 5, 0],
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={
                    activeAge === group.range
                      ? {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {}
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${group.color.replace("bg-", "text-")}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES SECTION ===== */}
      <section id="courses-display" className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Perfect Courses for {activeAge} Year Olds
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses[activeAge].map((course, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className={`p-4 rounded-xl ${course.color} text-white`}
                      >
                        {course.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {course.title}
                        </h3>
                        <div className="flex gap-2 mt-2">
                          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            ⏱️ {course.duration}
                          </span>
                          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            🎯 {course.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          Skills Developed:
                        </h4>
                        <ul className="space-y-2">
                          {course.skills.map((skill, i) => (
                            <li key={i} className="flex items-start">
                              <BsFillPatchCheckFill
                                className={`mt-1 mr-2 flex-shrink-0 ${course.color}`}
                              />
                              <span className="text-gray-600">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          Sample Projects:
                        </h4>
                        <ul className="space-y-2">
                          {course.projects.map((project, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 mr-2"></div>
                              <span className="text-gray-600">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                          Learning Outcomes:
                        </h4>
                        <ul className="space-y-2">
                          {course.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 mr-2"></div>
                              <span className="text-gray-600">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <Link
                        href={{
                          pathname: "/Register",
                          query: { ageGroup: activeAge,
                            courseName: course.title
                           },
                        }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`${course.color} text-white px-6 py-3 rounded-xl font-semibold flex-1 text-center`}
                        >
                          Enroll Now
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="border-2 border-gray-300 hover:border-[#6C5CE7] text-gray-700 hover:text-[#6C5CE7] px-4 py-3 rounded-xl font-medium transition-colors"
                      >
                        View Syllabus
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="how-it-works" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] bg-clip-text text-transparent">
                Our Learning Magic
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes our approach different and effective for young learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.bg} p-8 rounded-2xl hover:shadow-lg transition-all`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`${feature.color} mb-4`}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEARNING PATH ===== */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] bg-clip-text text-transparent">
                Structured Learning Journey
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our progressive curriculum builds skills step by step
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 h-full w-0.5 bg-[#6C5CE7] opacity-30"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[1, 2, 3, 4].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Circle */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white font-bold border-4 border-white">
                      {step}
                    </div>

                    {/* Content */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {
                          [
                            "Foundational Concepts",
                            "Creative Projects",
                            "Advanced Skills",
                            "Real-World Applications",
                          ][index]
                        }
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {
                          [
                            "Master basic programming concepts through interactive games and visual coding",
                            "Apply knowledge to build games, animations, and simple applications",
                            "Learn professional languages and development environments",
                            "Tackle complex projects that solve real problems",
                          ][index]
                        }
                      </p>
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-500">
                          Sample skills at this level:
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          ["Sequencing", "Patterns", "Basic Logic"],
                          ["Game Design", "Storytelling", "UI Basics"],
                          ["Python", "JavaScript", "App Development"],
                          ["APIs", "Databases", "AI Fundamentals"],
                        ][index].map((skill, i) => (
                          <span
                            key={i}
                            className="bg-[#6C5CE7]/10 text-[#6C5CE7] px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        id="testimonials"
        className="py-16 px-4 bg-gradient-to-r from-[#E3F2FD] to-[#F3E5F5]"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] bg-clip-text text-transparent">
                Proud Parents Share
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what families say about their coding journey with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gray-200 mr-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our programs
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-[#6C5CE7] transition-transform ${
                      activeFAQ === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeFAQ === index ? "auto" : 0,
                    opacity: activeFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Spark Your Child&apos;s Creativity?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of kids who discovered the joy of creating with
              code
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerConfetti}
                className="bg-white text-[#6C5CE7] px-8 py-4 rounded-full text-lg font-semibold shadow-xl flex items-center justify-center gap-2"
              >
                <FaRegSmile className="text-xl" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Talk to an Advisor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] flex items-center justify-center text-white">
                  <FaCode />
                </div>
                <span className="text-xl font-bold text-white">KidsMate</span>
              </div>
              <p className="mb-4">Making young innovators since 2023</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4267B2] flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1DA1F2] flex items-center justify-center text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E1306C] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0077B5] flex items-center justify-center text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Courses</h3>
              <ul className="space-y-2">
                {ageGroups.map((group) => (
                  <li key={group.range}>
                    <a href="#" className="hover:text-white transition-colors">
                      Ages {group.range} - {group.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Teachers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <address className="not-italic space-y-2">
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  123 Coding Lane, Tech City, TC 12345
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  hello@kidsmate.com
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  +1 (555) 123-4567
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 KidsMate. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
