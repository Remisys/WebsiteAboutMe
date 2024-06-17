export const WorkingExperience = () => <div className="max-w-[1400px] w-[90%] mt-20 backdrop-blur-[72px] bg-white/[.7] flex flex-col border-black  rounded-lg text-center  border-solid border-[2px]">
  <h1 className="sm:text-4xl text-3xl font-medium  p-7  self-start  ">
    Work Experience
  </h1>
  
  <hr className="h-[2px] border-none bg-black"/> 
  <ul className='flex flex-col self-start w-full text-start px-7 gap-10 py-10 '>
    <li>
      <div className="flex flex-col lg:flex-row lg:justify-between pb-4 lg:pb-0">
        <h3 className="sm:text-2xl text-xl font-medium  text-start font-mono   ">
          Nefino GmbH
        </h3>
        <h3 className="sm:text-xl text-lg  text-start  font-mono ">
          03.2023 - now
        </h3>
      </div>
      <p className="text-start font-serif text-lg">
      Developing a modern web app on the client side that provides valuable data for planning new wind and solar farms. 
      </p>
      <ul className="text-start list-disc ml-5 mt-2 font-serif">
        <li>Deliver new and reliable features for their web applications</li>
        <li>Revamp the aesthetics of the UIs iteratively</li>
        <li>Participate at Daily Meetings and do Scrum Sprints </li>
        <li>Code review for my peers</li>
        <li>Fix bugs and manage test files to prevent regressions</li>
      </ul>
    </li>
    <li >
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
        <li>Introduction to Database Systems (04.2023 - 09.2023) <br/>
Graded assignments and finals. Supervised during the final exam.
</li>
        <li>Hardware Lab (10.2022 - 04.2023) <br/>
        Guided the students during their lab sessions. Graded quizzes prior to the experiment.</li>
        <li>Analysis and Linear Algebra (10.2021 - 09.2022) <br/>
Graded assignments and finals. Supervised during the final exam.</li>
       
      </ul>
    </li>
    
   
  </ul>
  
</div>
