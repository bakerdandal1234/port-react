import { useState } from "react";
import "./Main.css";
import { projects } from "./Projects";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [current, setcurrent] = useState("all");
  const [arr, setarr] = useState(projects);
  const handlclick = (buttenCategory) => {
    setcurrent(buttenCategory);
    const newarr = projects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttenCategory;
      });
      return zzz === buttenCategory;
    });
    setarr(newarr);
  };
  return (
    <main className="flex">
      <section className=" flex  left-section">
        <button
          onClick={() => {
            setcurrent("all");
            setarr(projects);
          }}
          className={current === "all" ? "active" : null}
        >
          all products
        </button>

        <button
          onClick={() => {
            handlclick("css");
          }}
          className={current === "css" ? "active" : null}
        >
          html & css
        </button>

        <button
          onClick={() => {
            handlclick("react");
          }}
          className={current === "react" ? "active" : null}
        >
          react & mui
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key

              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:"spring",damping:8,stiffness:50}}
                key={item.img}
                className="card"
              >
                <img width={230} src={item.img} alt="" />
                <div style={{ width: "230px" }} className="box">
                  <h1 className="title">{item.description}</h1>
                  <p className="subtitle">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "10px" }} className="flex">
                      <a href={item.link}>
                        <div className="icon-link"></div>
                      </a>
                      <div className="icon-github"></div>
                    </div>
                    <a href="aaa">
                      other
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
