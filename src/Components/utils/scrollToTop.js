// scrollToTop.js

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optionally, you can use 'auto' instead of 'smooth' for an instant scroll
    });
  };
  
export default scrollToTop;
  