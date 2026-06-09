import { useState, useEffect } from "react";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize(prev =>
          prev.width === width && prev.height === height ? prev : { width, height }
        );
      }
      
      window.addEventListener("resize", handleResize);
      
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  }

  export default useWindowSize;