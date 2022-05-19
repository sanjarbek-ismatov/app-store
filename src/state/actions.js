module.exports.Request = () => {
  return {
    type: "request",
  };
};
module.exports.Success = (state) => {
  return {
    type: "success",
    payload: state,
  };
};
module.exports.Failure = (error) => {
  return { type: "failure", payload: error };
};
