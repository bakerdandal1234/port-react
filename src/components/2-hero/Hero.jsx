import Lottie from 'lottie-react';
import './Hero.css'
import { useRef } from "react";
import laptopanimation from "../../../src/animation/Animation - 1701526489755 (1).json"
import { motion } from 'framer-motion';
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className='  flex'>
    <div className=' first one'>
      <motion.img initial={{transform:"scale(0)"}} animate={{transform:"scale(1.1)"}} transition={{damping:6,type:"spring",stiffness:100}} src="./baker dandal.jpg" alt="" />
      <button className='icon-verified'/>
      <h1>
        software designer,founder <br/>,and amateur astronaut.
      </h1>
      <p>
      I’m baker dandal, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
      </p>
      <div className='social flex'>
        <button className='icon-instagram'/>
        <button className='icon-twitter-square'/>
        <button className='icon-linkedin-square'/>
        <button className='icon-github'/>
      </div>
    </div>
    
    <div style={{width:"300px"}} className=' flex  align'>
    <Lottie  className="laptopanimation" onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}   animationData={laptopanimation} />
    </div>
    </section>
  );
}

export default Hero;
