const logger = (state) => (next) => (action) => {
  console.log(state);
  console.log(action);
  return next(action);
};

export default logger;
