import * as motion from "motion/react-client";

export type ButtonProps = {
  url: string;
  text: string;
};

const Button = function (props: ButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0 },
      }}
    >
      <div className="md:m-10 m-5 flex-1 ">
        <div className="backdrop-blur-[72px] bg-white/[.5] hover:bg-gradient-to-r hover:from-purple-500 hover:to-sky-500 hover:shadow-lg flex-1 rounded-lg text-center lg:hover:scale-[1.2]">
          <p className="lg:text-3xl  text-2xl  sm:p-8 p-5  font-semibold hover:text-white  text-purple-600  ">
            <a href={props.url}>{props.text}</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default Button;
