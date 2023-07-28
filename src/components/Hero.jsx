import React, { useState } from "react";
import sendIcon from "../assets/send.svg";
import Loader from "./Loader";
import Tweet from "./Tweet";
import { pdfjs } from "react-pdf";

const Hero = ({ setIsGenerated, setCoverLoader }) => {
  const [loading, setLoading] = useState(false);
  const [thought, setThought] = useState("");
  const [tone, setTone] = useState("Overly-optimistic Dreamer");
  const [tweets, setTweets] = useState();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setCoverLoader(true);
    if (file) {
      try {
        const pdfText = await extractTextFromPDF(file);

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
              messages: [
                {
                  role: "system",
                  content:
                    "You are a text summarizer, you will summarize a whole text into a simple paragraph",
                },
                {
                  role: "user",
                  content: `Summarize: ${pdfText}`,
                },
              ],
              n: 1,
            }),
          }
        );

        const data = await response.json();
        setThought(data.choices[0].message.content.trim());
        setCoverLoader(false);
      } catch (error) {
        console.error("Error extracting text from PDF:", error);
        setCoverLoader(false);
      }
    }
  };

  const extractTextFromPDF = async (file) => {
    const loadingTask = pdfjs.getDocument(URL.createObjectURL(file));
    const pdf = await loadingTask.promise;

    const textContent = [];
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(" ");
      textContent.push(pageText);
    }

    return textContent.join(" ");
  };

  const tones = [
    "Overly-optimistic Dreamer",
    "Polygon Maximalist",
    "Constructive critic",
    "Former Polygon Supporter",
    "See More",
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
            messages: [
              {
                role: "system",
                content:
                  "You are a tweet generator, I will give you a thought and a tone, then you will provide a tweet that i can tweet based on the thought and tone",
              },
              {
                role: "user",
                content: `Generate a tweet, don't include hashtags in the genrated tweet and dont put it in quotes, Thought:${thought} Tone:${tone}`,
              },
            ],
            n: 1,
          }),
        }
      );

      const data = await response.json();

      setTweets(data.choices);
      setIsGenerated(!data.choices ? false : true);
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
      className="hero w-full pt-[4.44rem] h-fit font-inter flex flex-col items-center"
    >
      <h1 className="w-[999px] text-center text-black text-[64px] font-bold leading-[1]">
        Generate more polygon tweets instantly
      </h1>
      <p className="mt-[2rem] mb-[2.94rem] w-[941px] text-center text-black text-2xl leading-normal">
        Write and schedule tweet with just a click to twitter. Say no more to
        delayed tweet
      </p>
      <div className="w-[816.06px] h-[181.67px] bg-white rounded-xl border-[1px] border-black shadow-md ">
        <div className="h-[107.91px] flex border-b-[2px] border-zinc-400">
          <textarea
            className="resize-none flex-1 pl-[1.5rem] py-[1.25rem] outline-none rounded-xl"
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

      <div>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div className="mt-[50px] flex flex-wrap gap-[1rem] justify-center">
        {loading && <Loader />}
        {tweets &&
          tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />)}
      </div>
    </div>
  );
};

export default Hero;
