export default {
  mounted(el, { value }) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          value();
        }
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    observer.observe(el);
  },
};
