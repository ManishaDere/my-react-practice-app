const useDebounce = (func, delay) => {
    let debounceTimer;
    return (...args) => {
      clearTimeout(debounceTimer);
    //   const that = this;
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
//   function throttle(func, delay) {
//     let debounceTimer;
//     return (...args) => {
//       const that = this;
//       if (!debounceTimer) {
//         debounceTimer = setTimeout(() => {
//           func.apply(that, args);
//           debounceTimer = null;
//         }, delay);
//       }
//     };
//   }
export default useDebounce