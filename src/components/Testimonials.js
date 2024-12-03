// src/components/Testimonials.js
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    text: "Amazing work! Really impressed with the portfolio.",
  },
  {
    name: "Jane Smith",
    text: "A fantastic showcase of skills and projects!",
  },
];

const Testimonials = () => {
  return (
    <section>
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
