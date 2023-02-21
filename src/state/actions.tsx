export const Request = () => {
  return {
    type: "request",
  };
};
export const Success = (state: any) => {
  return {
    type: "success",
    payload: state,
  };
};
export const Failure = (error: any) => {
  return { type: "failure", payload: error };
};
