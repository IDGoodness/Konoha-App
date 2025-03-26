//import React from "react";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* FRAME1 */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white px-6"
           style={{ backgroundImage: "url('')" }}>
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold">Ever wanted a tutor that is always here all day and all night</h1>
          <p className="mt-3 text-lg">Try out the Konoha Superhuman Tutor for free(You'll get to learn Web3 at your own pace plus it's integrated with GPT4 so you can learn pretty much anything you want to learn)</p>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">Get Started</button>
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
              <a href="#" className="text-orange-500 font-medium mt-3 inline-block">Learn More</a>
            </div>
          ))}
        </div>
      </div>

      {/* Why You’ll Love Our Premium AI Tutor */}
      <div className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Why You’ll Love Our Premium AI Tutor.</h2>
        <div className="relative grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Intelligent Conversational Interface</h3>
            <p className="text-gray-600 mt-2">Edi can engage in natural language conversations with users, understanding their queries and providing accurate responses in real-time.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Adaptive Learning Algorithms</h3>
            <p className="text-gray-600 mt-2">Edi utilizes adaptive learning algorithms to analyze user performance, identify areas of improvement, and recommend targeted resources or practice materials.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Progress Tracking and Feedback</h3>
            <p className="text-gray-600 mt-2">Tracks and analyzes user progress, providing feedback on performance, strengths, and areas needing improvement.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Study Reminders and Scheduling</h3>
            <p className="text-gray-600 mt-2">Sends reminders, suggests study schedules to help users stay organized and maintain a consistent learning routine.</p>
          </div>
        </div>
      </div>

      {/* Consistent Learning Section */}
      <div className="bg-gray-100 py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">You can start consistent learning Now</h2>
        <p className="text-center text-gray-600 mt-2">Here is how we intend to keep you consistent.</p>
        <div className="mt-8 space-y-6">
          {learningMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">{method.title}</h3>
              <p className="text-gray-600 mt-2">{method.description}</p>
              <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">{method.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const sessions = [
  {
    title: "Get Into DeFi For Free",
    description: "Master key Concepts in the World of Cryptocurrency even if you are a Newbie - You'd be given a free curriculum by your new superhuman tutor!",
    image: "",
  },
  {
    title: "Master Your Finances Now",
    description: "Learn for free how to Manage and Multiply Money even if you have been bad at managing finances",
    image: "",
  },
    {
    title: "Get Ahead Of Your Peers Now",
    description: "Get ahead of your peers by mastering before they do. Your new Superhuman Tutor will introduce you to the hottest AI Product around the block",
    image: "",
  },
  {
    title: "Get into Trading Now",
    description: "Get Your Hands on some Dollars by Trading the Crypto Financial Market. Your Superhuman Tutor will guide you for Free",
    image: "",
  },
  {
    title: "Build Your Personal Brand For Free",
    description: "Easily Start Building Influence immediately by knowing your rules of the branding game online. Your Superhuman Tutor will keep you accountable",
    image: "",
  },
  {
    title: "Grow Your Business Now",
    description: "In This Sales Course, your Superhuman Tutor will show you how to increase sales, your business really needs to start making money",
    image: "",
  },
  {
    title: "Get Your Web3 Job Now",
    description: "Start a Career in Web3 Jobs. In this Course, your Superhuman Tutor will show you how to start getting jobs in the crypto space.",
    image: "",
  },
  {
    title: "Get Your Airdrop Money Now",
    description: "Join the million dollar Airdrop economy by familiarizing yourself with the Airdrop space under the guidance of your favourite Superhuman Tutor.",
    image: "",
  },
  {
    title: "Join the DeFi Big Data For Free",
    description: "Follow the whales and learn how to process Big data in the Trillion Dollar DeFi Economy. Receive daily or weekly classes from the hottest Superhuman Tutor around.",
    image: "",
  },
];

const learningMethods = [
  { title: "Very compact lessons", description: "Lessons that a 10-year-old would understand.", cta: "Try and See" },
  { title: "Free accountability partner", description: "Force yourself to learn every day.", cta: "Start your learning streak." },
  { title: "Get physical gifts", description: "Earn rewards for consistent learning.", cta: "Start your journey." },
  { title: "Choose a punishment", description: "Stay committed by setting consequences.", cta: "Get into the action." },
  { title: "Learn at your own pace", description: "Pick lessons per day or week.", cta: "Start picking now." },
  { title: "AI course creation", description: "Create a course from scratch with AI.", cta: "Get in now." },
];

export default HomePage;
