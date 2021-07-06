let container = document.querySelector(".testimonials__list");
let testimonials = document.querySelectorAll(".testimonial");
let markers = document.querySelectorAll(".testimonials__marker");
let [prev, next] = document.querySelectorAll(".testimonials__buttons button");

let containerPosition = 0;

prev.addEventListener("click", () => {
  // get current active testimonial
  const currentActiveTestimonialIndex = [...testimonials].findIndex((t) =>
    t.classList.contains("testimonial-active"),
  );

  // if first testimonial is active, make last one active
  // else make previous testimonial active
  if (currentActiveTestimonialIndex === 0) {
    // remove active class from active testimonial and marker
    testimonials[currentActiveTestimonialIndex].classList.remove(
      "testimonial-active",
    );
    markers[currentActiveTestimonialIndex].classList.remove("marker-active");

    // add active class to new testimonial and marker
    testimonials[testimonials.length - 1].classList.add("testimonial-active");
    markers[markers.length - 1].classList.add("marker-active");

    containerPosition = containerPosition - 450 * 4;
    container.style.transform = `translateX(${containerPosition}px)`;
  } else {
    // remove active class from active testimonial and marker
    testimonials[currentActiveTestimonialIndex].classList.remove(
      "testimonial-active",
    );
    markers[currentActiveTestimonialIndex].classList.remove("marker-active");

    // add active class to new testimonial and marker
    testimonials[currentActiveTestimonialIndex - 1].classList.add(
      "testimonial-active",
    );
    markers[currentActiveTestimonialIndex - 1].classList.add("marker-active");

    containerPosition = containerPosition + 450;
    container.style.transform = `translateX(${containerPosition}px)`;
  }
});

next.addEventListener("click", () => {
  // get current active testimonial
  const currentActiveTestimonialIndex = [...testimonials].findIndex((t) =>
    t.classList.contains("testimonial-active"),
  );

  // if last testimonial is active, make first one active
  // else make next testimonial active
  if (currentActiveTestimonialIndex === testimonials.length - 1) {
    // remove active class from active testimonial and marker
    testimonials[currentActiveTestimonialIndex].classList.remove(
      "testimonial-active",
    );
    markers[currentActiveTestimonialIndex].classList.remove("marker-active");

    // add active class to new testimonial and marker
    testimonials[0].classList.add("testimonial-active");
    markers[0].classList.add("marker-active");

    containerPosition = containerPosition + 450 * 4;
    container.style.transform = `translateX(${containerPosition}px)`;
  } else {
    // remove active class from active testimonial and marker
    testimonials[currentActiveTestimonialIndex].classList.remove(
      "testimonial-active",
    );
    markers[currentActiveTestimonialIndex].classList.remove("marker-active");

    // add active class to new testimonial and marker
    testimonials[currentActiveTestimonialIndex + 1].classList.add(
      "testimonial-active",
    );
    markers[currentActiveTestimonialIndex + 1].classList.add("marker-active");

    containerPosition = containerPosition - 450;
    container.style.transform = `translateX(${containerPosition}px)`;
  }
});
