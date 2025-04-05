"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChild,
  FaRobot,
  FaGamepad,
  FaCode,
  FaStar,
  FaLaptopCode,
  FaRegSmile,
  FaRegLightbulb,
  FaUsers,
} from "react-icons/fa";
import { PiStudentBold, PiCertificateBold } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";
import { BsRobot, BsFillPatchCheckFill } from "react-icons/bs";
import Image from "next/image";

// Animated floating shapes component
const FloatingShapes = () => {
  const shapes = [
    { color: "bg-[#FF9E5E]", size: "w-16 h-16", position: "top-1/4 left-1/5" },
    { color: "bg-[#6C5CE7]", size: "w-24 h-24", position: "top-1/3 right-1/4" },
    {
      color: "bg-[#00B894]",
      size: "w-20 h-20",
      position: "bottom-1/4 left-1/3",
    },
    {
      color: "bg-[#FD79A8]",
      size: "w-12 h-12",
      position: "bottom-1/3 right-1/5",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${shape.color} ${shape.size} ${shape.position} opacity-20`}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated confetti component
const Confetti = () => {
  const items = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100 - 100,
    },
    rotation: Math.random() * 360,
    size: Math.random() * 10 + 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-sm"
          style={{
            backgroundColor: item.color,
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.position.x}%`,
            top: `${item.position.y}%`,
            rotate: item.rotation,
          }}
          animate={{
            y: [item.position.y, item.position.y + 150],
            x: [item.position.x, item.position.x + (Math.random() * 40 - 20)],
            opacity: [1, 0],
            rotate: [item.rotation, item.rotation + 360],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 0.5,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [activeAge, setActiveAge] = useState("5-7");
  const [showConfetti, setShowConfetti] = useState(false);

  // Age Groups
  const ageGroups = [
    {
      range: "5-7",
      icon: <FaChild className="text-2xl" />,
      color: "bg-[#FF9E5E]",
      label: "Little Explorers",
    },
    {
      range: "8-10",
      icon: <FaGamepad className="text-2xl" />,
      color: "bg-[#6C5CE7]",
      label: "Junior Coders",
    },
    {
      range: "11-13",
      icon: <PiStudentBold className="text-2xl" />,
      color: "bg-[#00B894]",
      label: "Tech Wizards",
    },
    {
      range: "14-16",
      icon: <FaStar className="text-2xl" />,
      color: "bg-[#FD79A8]",
      label: "Future Innovators",
    },
  ];

  // Courses Data
  const courses = {
    "5-7": [
      {
        title: "Code with Blocks",
        icon: <FaGamepad className="text-2xl" />,
        skills: ["Drag-and-drop coding", "Basic logic", "Fun puzzles"],
        duration: "6 weeks",
        projects: ["Build a digital story", "Create simple games"],
        color: "bg-[#FF9E5E]",
      },
      {
        title: "Robot Buddies",
        icon: <BsRobot className="text-2xl" />,
        skills: ["Simple robotics", "Team projects", "Creative thinking"],
        duration: "8 weeks",
        projects: ["Program a robot dance", "Build a maze solver"],
        color: "bg-[#6C5CE7]",
      },
    ],
    "8-10": [
      {
        title: "Scratch Adventures",
        icon: <FaLaptopCode className="text-2xl" />,
        skills: ["Game development", "Animation basics", "Interactive stories"],
        duration: "10 weeks",
        projects: ["Create your first game", "Animate a cartoon"],
        color: "bg-[#00B894]",
      },
      {
        title: "Web Wizards",
        icon: <FaCode className="text-2xl" />,
        skills: ["HTML/CSS basics", "Creative design", "Simple JavaScript"],
        duration: "12 weeks",
        projects: ["Build a personal website", "Design a digital poster"],
        color: "bg-[#FD79A8]",
      },
    ],
    "11-13": [
      {
        title: "Python Playground",
        icon: <FaCode className="text-2xl" />,
        skills: ["Python fundamentals", "Problem solving", "Game development"],
        duration: "12 weeks",
        projects: ["Create a calculator", "Build a text adventure game"],
        color: "bg-[#6C5CE7]",
      },
      {
        title: "App Inventors",
        icon: <IoMdSchool className="text-2xl" />,
        skills: ["Mobile app basics", "UI design", "Logical thinking"],
        duration: "14 weeks",
        projects: ["Design a weather app", "Create a quiz application"],
        color: "bg-[#00B894]",
      },
    ],
    "14-16": [
      {
        title: "AI Explorers",
        icon: <BsRobot className="text-2xl" />,
        skills: ["Machine learning basics", "Data analysis", "Ethical AI"],
        duration: "16 weeks",
        projects: ["Train a simple AI model", "Analyze real-world data"],
        color: "bg-[#FF9E5E]",
      },
      {
        title: "Web Warriors",
        icon: <FaLaptopCode className="text-2xl" />,
        skills: ["Full-stack basics", "APIs", "Project management"],
        duration: "14 weeks",
        projects: ["Build a blog with CMS", "Create a weather dashboard"],
        color: "bg-[#FD79A8]",
      },
    ],
  };

  const features = [
    {
      title: "Game-Based Learning",
      description: "Kids learn through interactive games and challenges",
      icon: <FaGamepad className="text-3xl" />,
      color: "text-[#6C5CE7]",
    },
    {
      title: "Project Portfolio",
      description: "Every student builds a portfolio of real projects",
      icon: <PiCertificateBold className="text-3xl" />,
      color: "text-[#00B894]",
    },
    {
      title: "Small Class Sizes",
      description: "Maximum 6 students per teacher for personalized attention",
      icon: <FaUsers className="text-3xl" />,
      color: "text-[#FD79A8]",
    },
    {
      title: "Creative Freedom",
      description: "Students choose projects based on their interests",
      icon: <FaRegLightbulb className="text-3xl" />,
      color: "text-[#FF9E5E]",
    },
  ];

  const testimonials = [
    {
      name: "Sophia's Mom",
      role: "Parent of 8-year-old",
      quote:
        "My daughter went from playing games to creating them in just 3 months!",
      rating: 5,
    },
    {
      name: "Raj's Dad",
      role: "Parent of 11-year-old",
      quote:
        "The teachers make complex concepts so accessible for kids. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emma's Parents",
      role: "Parents of 6-year-old",
      quote:
        "Our shy daughter has gained so much confidence through coding. She loves her classes!",
      rating: 5,
    },
  ];

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // you can tweak this value
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-[#E3F2FD]">
      {showConfetti && <Confetti />}

      {/* ===== NAVIGATION ===== */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 
  ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] flex items-center justify-center text-white">
              <FaCode />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] bg-clip-text text-transparent">
              KidsMate
            </span>
          </motion.div>

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
              href="#pricing"
              className="font-medium hover:text-[#6C5CE7] transition-colors"
            >
              Pricing
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
          >
            Join Course
          </motion.button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <header className="relative overflow-hidden pt-16 pb-24">
        <FloatingShapes />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8]">
                Coding Made Magical
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Where kids transform from tech users to tech creators through
              play-based learning!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerConfetti}
                className="bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] hover:from-[#5649C7] hover:to-[#E84393] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl flex items-center justify-center gap-2"
              >
                {/* <FaRegSmile className="text-xl" /> */}
                <span>
                  <Image
                    src="/emoji.png"
                    alt="emoji"
                    width={48}
                    height={48}
                    className="w-12"
                  />
                </span>
                Book Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Explore Courses
              </motion.button>
            </div>
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
          </div>
        </motion.div>
      </header>

      {/* ===== AGE SELECTOR ===== */}
      <section id="courses" className="py-12 px-4 bg-white">
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
              <motion.button
                key={group.range}
                onClick={() => setActiveAge(group.range)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  group.color
                } p-6 rounded-xl shadow-md text-white text-center transition-all ${
                  activeAge === group.range
                    ? "ring-4 ring-white scale-105 z-10"
                    : "opacity-90 hover:opacity-100"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * ageGroups.indexOf(group) }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3">{group.icon}</div>
                  <span className="font-bold text-xl">{group.range}</span>
                  <span className="text-sm">years old</span>
                  <span className="mt-2 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                    {group.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES SECTION ===== */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <div className="mt-2">
                          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            ⏱️ {course.duration}
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
                    </div>

                    <div className="mt-8 flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`${course.color} text-white px-6 py-3 rounded-xl font-semibold flex-1 text-center`}
                      >
                        Enroll Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="border-2 border-gray-300 hover:border-[#6C5CE7] text-gray-700 hover:text-[#6C5CE7] px-4 py-3 rounded-xl font-medium transition-colors"
                      >
                        Details
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#F8F9FA] p-8 rounded-2xl hover:shadow-lg transition-all"
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
                  <div className="w-14 h-14 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-gray-500">
                    <FaUsers className="text-xl" />
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

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 px-4 bg-[#6C5CE7] text-white">
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
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
                >
                  <span className="sr-only">Facebook</span>
                  {/* Icon would go here */}
                </a>
                {/* Add other social icons */}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Courses</h3>
              <ul className="space-y-2">
                {ageGroups.map((group) => (
                  <li key={group.range}>
                    <a href="#" className="hover:text-white transition-colors">
                      Ages {group.range}
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
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <address className="not-italic">
                <p className="mb-2">123 Coding Lane</p>
                <p className="mb-2">Tech City, TC 12345</p>
                <p className="mb-2">hello@codejunior.com</p>
                <p>+1 (555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2025 KidsMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
