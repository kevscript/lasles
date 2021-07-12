let container = document.querySelector(".testimonials__list");
let testimonials = document.querySelectorAll(".testimonial");
let markers = document.querySelectorAll(".testimonials__marker");
let [prev, next] = document.querySelectorAll(".testimonials__buttons button");

// representation of the default container state
// original poosition = 0
let containerPosition = 0;

// if first testimonial is active, disables prev button, otherwise enables
// if last testimonial is active, disables next button, otherwise enables
function handleButtonState() {
  if (testimonials[0].classList.contains("testimonial-active")) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
  if (
    testimonials[testimonials.length - 1].classList.contains(
      "testimonial-active",
    )
  ) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
}

// initial buttons state setter
handleButtonState();

function getCurrentActiveTestimonialIndex(testimonials) {
  const currentActiveTestimonialIndex = [...testimonials].findIndex((t) =>
    t.classList.contains("testimonial-active"),
  );
  return currentActiveTestimonialIndex;
}

function handleTestimonialState(
  direction,
  currentIndex,
  testimonials,
  markers,
) {
  if (direction === "prev") {
    // remove active class from current testimonial and marker
    testimonials[currentIndex].classList.remove("testimonial-active");
    markers[currentIndex].classList.remove("marker-active");

    // add active class to prev testimonial and marker
    testimonials[currentIndex - 1].classList.add("testimonial-active");
    markers[currentIndex - 1].classList.add("marker-active");
  }

  if (direction === "next") {
    // remove active class from current testimonial and marker
    testimonials[currentIndex].classList.remove("testimonial-active");
    markers[currentIndex].classList.remove("marker-active");

    // add active class to next testimonial and marker
    testimonials[currentIndex + 1].classList.add("testimonial-active");
    markers[currentIndex + 1].classList.add("marker-active");
  }
}

// clicking on previous button
prev.addEventListener("click", () => {
  // get current active testimonial
  const currentActiveTestimonialIndex =
    getCurrentActiveTestimonialIndex(testimonials);
  // if current testimonial is not already the first, make previous active
  if (currentActiveTestimonialIndex !== 0) {
    handleTestimonialState(
      "prev",
      currentActiveTestimonialIndex,
      testimonials,
      markers,
    );
    // get testimonial into view by moving container
    // 450px is the width of a testimonial
    containerPosition = containerPosition + 450;
    container.style.transform = `translateX(${containerPosition}px)`;
  }
  // check if we need to enable/disable a button
  handleButtonState();
});

// clicking on next button
next.addEventListener("click", () => {
  // get current active testimonial
  const currentActiveTestimonialIndex =
    getCurrentActiveTestimonialIndex(testimonials);
  // if not at last testimonial, make next one active
  if (currentActiveTestimonialIndex !== testimonials.length - 1) {
    handleTestimonialState(
      "next",
      currentActiveTestimonialIndex,
      testimonials,
      markers,
    );
    // get testimonial into view by moving container
    // 450px is the width of a testimonial
    containerPosition = containerPosition - 450;
    container.style.transform = `translateX(${containerPosition}px)`;
  }
  // check if we need to enable/disable a button
  handleButtonState();
});

// reseting testimonials to initial state if view width < 500px
function resetTestimonials() {
  // if view < 500px && testimonials not already in initial state
  if (
    window.innerWidth <= 500 &&
    !testimonials[0].classList.contains("testimonial-active")
  ) {
    const currentActiveTestimonialIndex =
      getCurrentActiveTestimonialIndex(testimonials);

    testimonials[currentActiveTestimonialIndex].classList.remove(
      "testimonial-active",
    );
    markers[currentActiveTestimonialIndex].classList.remove("marker-active");
    testimonials[0].classList.add("testimonial-active");
    markers[0].classList.add("marker-active");

    handleButtonState();

    containerPosition = 0;
    container.style.transform = `translateX(${0}px)`;
  }
}

// check if testimonials needs reset
window.addEventListener("resize", () => resetTestimonials());
