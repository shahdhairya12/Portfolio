import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Software Developer','Web Developer','Problem Solver',' 16+ Hackathon Participant ',' 12 hackathon final round selected'],
          autoStart: true,
          loop: true,
          delay: 33,
          deleteSpeed:11,
        }}
      />
    </div>
  )
}

export default Typed
