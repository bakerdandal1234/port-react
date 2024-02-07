import { ValidationError, useForm } from "@formspree/react";
import "./Contact.css";
import Lottie from "lottie-react";
import doneanimation from "../../../src/animation/Animation - 1701517513617.json";
import emailanimation from "../../../src/animation/Animation - 1701525274968.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xoqoobpe");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        contact us
      </h1>

      <p className="subtitle">
        contact us for more information and get notified when i publish
        something new
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">email address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div style={{ marginTop: "20px" }} className=" flex">
            <label htmlFor="text">your message:</label>
            <textarea required id="text" name="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "submitting..." : "submit"}
          </button>

          {state.succeeded && (
            <h1 className="flex" style={{ alignItems: "center" }}>
              <Lottie
                loop={false}
                style={{ height: "55px", marginTop: "10px" }}
                animationData={doneanimation}
              />
              message has been sent successfuly{" "}
            </h1>
          )}
        </form>

        <div className="animation">
        <Lottie className="emailanimation"
                style={{ height: 355 }}
                animationData={emailanimation}
              />
        </div>
      </div>
    </section>
  );
};

export default Contact;
