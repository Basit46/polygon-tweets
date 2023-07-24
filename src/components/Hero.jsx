import React, { useState } from "react";
import sendIcon from "../assets/send.svg";
import Tweet from "./Tweet";

const Hero = ({ isGenerated, setIsGenerated }) => {
  const [loading, setLoading] = useState(false);
  const [thought, setThought] = useState("");
  const [tone, setTone] = useState("Overly-optimistic Dreamer");
  const [tweets, setTweets] = useState();

  const tones = [
    "Overly-optimistic Dreamer",
    "Polygon Maximalist",
    "Constructive critic",
    "Former Polygon Supporter",
    "See More",
  ];

  const messages = [
    {
      role: "system",
      content:
        "You are a tweet generator, I will give you a thought and a tone, then you will provide a tweet that i can tweet based on the thought and tone",
    },
    {
      role: "user",
      content: `Generate a tweet, don't include hashtags in the genrated tweet and dont put it in quotes, Thought:${thought} Tone:${tone}`,
    },
  ];

  const handleGenerateTweets = async () => {
    setTweets();
    setLoading(true);
    setIsGenerated(true);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_MY_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messages,
            n: 5,
          }),
        }
      );

      const data = await response.json();

      setTweets(data.choices);
      setIsGenerated(true);
      setLoading(false);
    } catch (error) {
      console.error("Error generating tweets:", error);
      setLoading(false);
      setIsGenerated(false);
    }
  };

  return (
    <div
      id="hero"
      className="hero w-full pt-[4.44rem] h-fit font-inter flex flex-col items-center "
    >
      <h1 className="w-[999px] text-center text-black text-[64px] font-bold leading-[1]">
        Generate more polygon tweets instantly
      </h1>
      <p className="mt-[2rem] mb-[2.94rem] w-[941px] text-center text-black text-2xl leading-normal">
        Write and schedule tweet with just a click to twitter. Say no more to
        delayed tweet
      </p>
      <div className="w-[816.06px] h-[181.67px] bg-white rounded-xl shadow">
        <div className="h-[107.91px] flex border-b-[2px] border-zinc-400">
          <textarea
            className="resize-none flex-1 pl-[1.5rem] py-[1.25rem] outline-none"
            placeholder="Enter your thought"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          ></textarea>
          <img
            className="w-[32px] active:w-[28.34px] h-[32px] active:h-[28.34px]  self-end"
            onClick={handleGenerateTweets}
            src={sendIcon}
            alt="sendICon"
          />
        </div>

        <div className="pt-[0.69rem] flex justify-center items-center gap-[0.75rem]">
          {tones.map((tone, index) => (
            <div
              key={index}
              onClick={() => setTone(tone)}
              className="tone cursor-pointer"
            >
              {tone}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[50px] flex flex-wrap gap-[1rem] justify-center">
        {loading && (
          <h1 className="text-black text-[2rem] text-center">Loading.....</h1>
        )}
        {tweets &&
          tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />)}
      </div>
    </div>
  );
};

export default Hero;
