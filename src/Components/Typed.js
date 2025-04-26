import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Software Developer','Web Developer','Competitive Programmer','Problem Solver'],
          autoStart: true,
          loop: true,
          delay: 20,
          deleteSpeed:5,
        }}
      />
    </div>
  )
}

export default Typed
