import * as motion from "motion/react-client";

export const WorkingExperience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
    }}
    className=" text-black max-w-[1400px] w-[90%] backdrop-blur-[72px] bg-white/[.7] flex flex-col border-black  rounded-lg text-center  border-solid border-[2px]"
  >
    <h1 className="sm:text-4xl text-3xl font-medium  p-7  self-start  ">
      Work Experience
    </h1>

    <hr className="h-[2px] border-none bg-black" />
    <ul className="flex flex-col self-start w-full text-start px-7 gap-10 py-10  ">
      <li>
        <div className="flex flex-col lg:flex-row lg:justify-between pb-4 lg:pb-0">
          <h3 className="sm:text-2xl text-xl font-medium  text-start font-mono   ">
            Hornetsecurity GmbH
          </h3>
          <h3 className="sm:text-xl text-lg  text-start  font-mono ">
            08.2024 - now
          </h3>
        </div>
        <p className="text-start font-serif text-lg">
          Developing a modern web app on the client side that provides valuable
          data for planning new wind and solar farms.
        </p>
        <ul className="text-start list-disc ml-5 mt-2 font-serif">
          <li>
            Continuously implementing diverse JIRA bug, feature, and ops tickets
            with Scrum Framework as our workflow
          </li>
          <li>
            Presented my work in front of stakeholders during Sprint Reviews
          </li>
          <li>
            Communicate and deploy JIRA tickets to staging for the QAs to verify
            their implementation
          </li>
          <li>Present frontend topics in Community of Practice</li>
          <li>
            Do code reviews for my colleagues and give guidance to apprentices
          </li>
          <li>
            Adjusted the staging deployment pipeline to consider different
            environment settings
          </li>
        </ul>
      </li>
      <li>
        <div className="flex flex-col lg:flex-row lg:justify-between pb-4 lg:pb-0">
          <h3 className="sm:text-2xl text-xl font-medium  text-start font-mono   ">
            Nefino GmbH
          </h3>
          <h3 className="sm:text-xl text-lg  text-start  font-mono ">
            03.2023 - 08.2024
          </h3>
        </div>
        <p className="text-start font-serif text-lg">
          Developing a modern web app on the client side that provides valuable
          data for planning new wind and solar farms.
        </p>
        <ul className="text-start list-disc ml-5 mt-2 font-serif">
          <li>
            Iteratively implemented new features and fixed bugs on their
            internal and publicly used web applications
          </li>
          <li>
            Upgraded the user interface and make them responsive for mobile
            viewports
          </li>
          <li>Participated in Daily Meetings</li>
          <li>Conducted Code review for my peers</li>
          <li>
            Maintained and extend our test files to conduct interact testing
            which prevents regressions
          </li>
        </ul>
      </li>
      <li>
        <div className="flex flex-col lg:flex-row lg:justify-between pb-4 lg:pb-0">
          <h3 className="sm:text-2xl text-xl font-medium  text-start font-mono   ">
            Leibniz University Hannover
          </h3>
          <h3 className="sm:text-xl text-lg  text-start  font-mono ">
            10.2021 - 09.2023
          </h3>
        </div>
        <p className="text-start font-serif text-lg">
          Assisted on several bachelor courses.
        </p>
        <ul className="text-start list-disc ml-5 font-serif mt-2">
          <li>
            Introduction to Database Systems (04.2023 - 09.2023) <br />
            Graded assignments and finals. Supervised during the final exam.
          </li>
          <li>
            Hardware Lab (10.2022 - 04.2023) <br />
            Guided the students during their lab sessions. Graded quizzes prior
            to the experiment.
          </li>
          <li>
            Analysis and Linear Algebra (10.2021 - 09.2022) <br />
            Graded assignments and finals. Supervised during the final exam.
          </li>
        </ul>
      </li>
    </ul>
  </motion.div>
);
