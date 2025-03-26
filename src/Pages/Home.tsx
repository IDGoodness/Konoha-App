//import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import owl from "../assets/owl.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";
import avatar9 from "../assets/avatar9.png";
import avatar10 from "../assets/avatar10.png";
import avatar11 from "../assets/avatar11.png";
import avatar12 from "../assets/avatar12.png";
import avatar13 from "../assets/avatar13.png";
import avatar14 from "../assets/avatar14.png";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* FRAME1 */}
      <div className="relative w-full p-20 lg:p-40 bg-cover bg-center flex items-start justify-center text-white z-0" style={{ backgroundImage: `url(${hero})` }}>
        <div className="text-center lg:text-left max-w-5xl">
          <h1 className="text-3xl lg:text-4xl font-bold mt-10">Ever wanted a tutor that is always here all day and all night?</h1>
          <p className="mt-7 text-xs lg:text-lg">Try out the Konoha Superhuman Tutor for free <br /> (You'll get to learn Web3 at your own pace plus it's integrated with GPT 4 so you can learn pretty much anything you want to learn.)</p>
          <button className="mt-20 px-6 py-2 bg-kOrange text-white rounded-md hover:bg-orange-500"><Link to={"/ask"} >Get Started</Link></button>
        </div>
      </div>

      {/* AVAILABLE COURSES */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center">AVAILABLE COURSES</h2>
        <p className="text-center text-gray-600 mt-2">These courses provide real-time engagement and interactive experiences.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {sessions.map((session, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all">
              <img src={session.image} alt={session.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{session.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{session.description}</p>
              <Link to={"/courses"} className="text-orange-500 font-medium mt-3 inline-block">Learn More</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why You’ll Love Our Premium AI Tutor */}
      <div className="bg-white rounded-2xl py-12  lg:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Why You’ll Love Our Premium AI Tutor:</h2>
        <div className="relative grid md:grid-cols-2 gap-14 mt-8">
          <div className="bg-gray-100 p-6 rounded-2xl z-10">
            <h3 className="text-xl font-semibold">Intelligent Conversational Interface</h3>
            <p className="text-gray-600 mt-2">Konoha AI can engage in natural language conversations with users, understanding their queries and providing accurate responses in real-time.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl z-10">
            <h3 className="text-xl font-semibold">Adaptive Learning Algorithms</h3>
            <p className="text-gray-600 mt-2">Konoha AI utilizes adaptive learning algorithms to analyze user performance, identify areas of improvement, and recommend targeted resources or practice materials.</p>
          </div>
          <div className="absolute left-65 -mt-10 z-0 hidden md:block " >
            <img src={owl} alt="AI Tutor" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl z-10">
            <h3 className="text-xl font-semibold">Progress Tracking and Feedback</h3>
            <p className="text-gray-600 mt-2">Tracks and analyzes user progress, providing feedback on performance, strengths, and areas needing improvement.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl z-10">
            <h3 className="text-xl font-semibold">Study Reminders and Scheduling</h3>
            <p className="text-gray-600 mt-2">Sends reminders, suggests study schedules to help users stay organized and maintain a consistent learning routine.</p>
          </div>
        </div>
      </div>

      {/* Consistent Learning Section */}
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">You can start consistent learning now!</h2>
        <p className="text-center text-gray-600 mt-2">Here is how we intend to keep you consistent:</p>
        <div className="mt-8 space-y-6 grid md:grid-cols-3 gap-6">
          {learningMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md h-[200px] text-center">
              <h3 className="text-xl font-semibold">{method.title}</h3>
              <p className="text-gray-600 mt-2">{method.description}</p>
              <button className="mt-4 px-6 py-2 bg-kOrange text-white rounded-2xl hover:bg-orange-500"><Link to={"/ask"} > {method.cta} </Link></button>
            </div>
          ))}
        </div>
      </div>

      {/* Join our Community */}
      <div className="bg-kOrange rounded-4xl py-12 md:px-20 max-w-6xl mx-auto " >
        <h2 className="text-3xl font-semibold text-center text-white">Join our Community</h2>
        <div className="mt-8 mx-auto px-5 space-y-5 grid grid-cols-4 md:grid-cols-7 " >
          {community.map((member, index) => (
            <div key={index} className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
              <img src={member.image} alt="Community Member" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <p className="text-center text-white mt-2">Join our community of learners and educators to share knowledge, resources, and insights.</p>
        <div className="flex items-center justify-center mt-8">
          {/* Add a socials or WhatsApp link here instead Do not forget!!! */}
          <button className="px-6 py-2 bg-white text-kBrown rounded-md hover:bg-orange-500 hover:text-white"><Link to={"/"} >Join Now</Link></button>
        </div>
      </div>
    </div>
  );
};

const sessions = [
  {
    title: "Get Into DeFi For Free",
    description: "Master key Concepts in the World of Cryptocurrency even if you are a Newbie - You'd be given a free curriculum by your new superhuman tutor!",
    image: img1,
  },
  {
    title: "Master Your Finances Now",
    description: "Learn for free how to Manage and Multiply Money even if you have been bad at managing finances",
    image: img2,
  },
    {
    title: "Get Ahead Of Your Peers Now",
    description: "Get ahead of your peers by mastering before they do. Your new Superhuman Tutor will introduce you to the hottest AI Product around the block",
    image: img3,
  },
  {
    title: "Get into Trading Now",
    description: "Get Your Hands on some Dollars by Trading the Crypto Financial Market. Your Superhuman Tutor will guide you for Free",
    image: img4,
  },
  {
    title: "Build Your Personal Brand For Free",
    description: "Easily Start Building Influence immediately by knowing your rules of the branding game online. Your Superhuman Tutor will keep you accountable",
    image: img5,
  },
  {
    title: "Grow Your Business Now",
    description: "In This Sales Course, your Superhuman Tutor will show you how to increase sales, your business really needs to start making money",
    image: img6,
  },
  {
    title: "Get Your Web3 Job Now",
    description: "Start a Career in Web3 Jobs. In this Course, your Superhuman Tutor will show you how to start getting jobs in the crypto space.",
    image: img2,
  },
  {
    title: "Get Your Airdrop Money Now",
    description: "Join the million dollar Airdrop economy by familiarizing yourself with the Airdrop space under the guidance of your favourite Superhuman Tutor.",
    image: img1,
  },
  {
    title: "Join the DeFi Big Data For Free",
    description: "Follow the whales and learn how to process Big data in the Trillion Dollar DeFi Economy. Receive daily or weekly classes from the hottest Superhuman Tutor around.",
    image: img3,
  },
];

const learningMethods = [
  { title: "Very compact lessons", description: "Lessons that a 10-year-old would understand.", cta: "Try and See." },
  { title: "Free accountability partner", description: "Force yourself to learn every day.", cta: "Start your learning streak." },
  { title: "Get physical gifts", description: "Earn rewards for consistent learning.", cta: "Start your journey." },
  { title: "Choose a punishment", description: "Stay committed by setting consequences.", cta: "Get into the action." },
  { title: "Learn at your own pace", description: "Pick lessons per day or week.", cta: "Start picking now." },
  { title: "AI course creation", description: "Create a course from scratch with AI.", cta: "Get in now." },
];

const community = [
  { image: avatar1, }, { image: avatar2, }, { image: avatar3, }, { image: avatar4, }, { image: avatar5, },{ image: avatar6, }, { image: avatar7, }, { image: avatar8, }, { image: avatar9, }, { image: avatar10, }, { image: avatar11, }, { image: avatar12, }, { image: avatar13, }, { image: avatar14, },
];

export default Home;
