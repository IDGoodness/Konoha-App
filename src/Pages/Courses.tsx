import { useState } from "react";

const Courses = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sessions = [
    {
      title: "Introduction to DeFi ",
      content:
        "Master key Concepts in the World of Cryptocurrency even if you are a Newbie - You'd be given a free curriculum by your new superhuman tutor!",
    },
    {
      title: "Introduction to Personal Finance",
      content:
        "Learn for free how to Manage and Multiply Money even if you have been bad at managing finances",
    },
    {
      title: "Getting into AI",
      content:
        "Get ahead of your peers by mastering before they do. Your new Superhuman Tutor will introduce you to the hottest AI Product around the block",
    },
    {
      title: "Learn Spot and Future Trading",
      content:
        "Get Your Hands on some Dollars by Trading the Crypto Financial Market. Your Superhuman Tutor will guide you for Free",
    },
    {
      title: "Personal Branding",
      content: "Easily Start Building Influence immediately by knowing your rules of the branding game online. Your Superhuman Tutor will keep you accountable",
    },
    {
      title: "Small Business Growth",
      content: "In This Sales Course, your Superhuman Tutor will show you how to increase sales, your business really needs to start making money",
    },
    {
      title: "Web3 Jobs",
      content: "Start a Career in Web3 Jobs. In this Course, your Superhuman Tutor will show you how to start getting jobs in the crypto space.",
    },
    {
      title: "Airdrops",
      content: "Join the million dollar Airdrop economy by familiarizing yourself with the Airdrop space under the guidance of your favourite Superhuman Tutor.",
    },
    {
      title: "DeFi On-chain and Data Analysis",
      content: "Follow the whales and learn how to process Big data in the Trillion Dollar DeFi Economy. Receive daily or weekly classes from the hottest Superhuman Tutor around.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center mt-20">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800">Learn more</h1>
        <p className="text-lg text-gray-600 mt-2">from experts, directly to you</p>
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Illustration"
          className="mt-6 mx-auto rounded-lg"
        />
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl w-full mt-8">
        {sessions.map((session, index) => (
          <div key={index} className="mb-4 border rounded-2xl overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 bg-white text-gray-800 font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {session.title}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-100 text-xl text-gray-700">
                {session.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
