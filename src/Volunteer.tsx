import * as motion from "motion/react-client";

export const Volunteer = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
    }}
    className=" text-black max-w-[1400px] w-[90%] mt-20 backdrop-blur-[72px] bg-white/[.7] flex flex-col border-black  rounded-lg text-center  border-solid border-[2px]"
  >
    <h1 className="sm:text-4xl text-3xl font-medium  p-7  self-start  ">
      Volunteers
    </h1>

    <hr className="h-[2px] border-none bg-black" />
    <ul className="flex flex-col self-start w-full text-start px-7 gap-10 py-10  ">
      <li>
        <div className="flex flex-col lg:flex-row lg:justify-between pb-4 lg:pb-0">
          <h3 className="sm:text-2xl text-xl font-medium  text-start font-mono   ">
            PPI Jerman
          </h3>
          <h3 className="sm:text-xl text-lg  text-start  font-mono ">
            11.2023 - 09.2024
          </h3>
        </div>
        <p className="text-start font-serif text-lg">
          Participated in Indonesian Students Association in Germany.
          Volunteered in the IT Department.
        </p>
        <ul className="text-start list-disc ml-5 mt-2 font-serif">
          <li>
            Codeveloped a web app to gather and visualize information on all
            Indonesian students and apprentices in Germany{" "}
          </li>
          <li>
            Codeveloped during the hackathon in St Gallen (CH) a prototype to
            answer inquiries at the call center per voice with Whisper, GPT4,
            and Retrieval Augmented Generation (RAG).
          </li>
        </ul>
      </li>
    </ul>
  </motion.div>
);
