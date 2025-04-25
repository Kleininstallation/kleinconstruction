import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Mai Swapp',
    quote: '"I highly recommend Klein constructions! They’ve done several jobs for us, some big and some small, but all our experiences have been very professional, efficient, and quality. They’re also good with communication, and you know exactly what to expect. We’ve experienced our share of bad contractors, so I’m so happy to have found someone we can trust!!"',
  },
  {
    id: 2,
    name: 'Clark Fawcett',
    quote: '"We hired Klein Installation to build a 2400 sq feet addition to our home. We are really pleased with their service, price, and timely completion of this addition. They made every effort to provide quality work while doing whatever they could to keep the cost down. They personally did some jobs rather than sub them out if the cost were too high. They responded quickly to any problems encountered. Since completion they still respond quickly to any problems we encounter and get them resolved. We couldn’t have asked for any better contractor. We love our new addition and the construction went so well and the communication was so good it was a pleasant experience. A+"',
  },
  {
    id: 3,
    name: 'Karl',
    quote: '"My experience with Randy and his team from Klein Construction was exceptional! We needed an awning in our backyard to provide some much-needed shade during the summer months, and Klein Construction delivered beyond our expectations. In an impressively short time of just 3-4 days, they constructed a 15x24 ft awning that not only perfectly meets our functional needs but also beautifully complements the color and design of our house. Thanks to their excellent work, we now enjoy ample shade and have an ideal space for our grill and outdoor furniture. I look forward to relaxing outside in the shade this summer and hosting some barbecue parties. I wholeheartedly recommend Klein Construction for their professionalism, skill, and remarkable efficiency."',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <p>{testimonials[currentIndex].quote}</p>
        <p>- {testimonials[currentIndex].name}</p>
      </div>
      <div className='buttons'>
        <button id="Back" onClick={goToPrevious}>Back</button>
        <button id="next" onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;