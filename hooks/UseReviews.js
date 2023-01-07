import { useContext, createContext } from "react";

const ReviewContext = createContext({
  reviews: [],
});

export const useReview = () => useContext(ReviewContext);

export const ReviewProvider = ({ reviews, children }) => {
  return (
    <ReviewContext.Provider value={{ reviews: reviews }}>
      {children}
    </ReviewContext.Provider>
  );
};
