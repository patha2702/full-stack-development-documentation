import React, {useEffect, useRef} from "react";
import { motion, useAnimate, useInView, useScroll } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const gridSquareVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

const App = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {once: true})
  const [ scope, animate] = useAnimate()

  useEffect(()=> {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        className="grid grid-cols-3 p-10 gap-10"
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="h-20 w-20 bg-stone-100 rounded-lg"
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
          ></motion.div>
          <motion.div
            className="h-20 w-20 bg-stone-100 rounded-full"
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="h-1/3 w-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 200,
            }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
          >
            Subscribe
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="h-1/3 w-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{
              top: -500,
              bottom: 500,
              right: 500,
              left: -500,
            }}
            transition={{
              bounceStiffness: 500,
              bounceDamping: 10,
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="w-full bg-gray-400 h-full rounded-xl origin-bottom"
              style={{
                scaleY: completionProgress,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      <section className="flex flex-col gap-10 mb-10">
        <h1 className="text-5xl tracking-wide text-slate-100 text-center">
          Just Keep scrolling
        </h1>
        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          The viewBox attribute defines the coordinate system and the aspect
          ratio for the SVG viewport. In this case, it specifies a square
          viewport of 24 units by 24 units.
        </p>
        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          The viewBox attribute defines the coordinate system and the aspect
          ratio for the SVG viewport. In this case, it specifies a square
          viewport of 24 units by 24 units.
        </p>
      </section>
    </div>
  );
};

export default App;
