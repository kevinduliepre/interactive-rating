import { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectedRating = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleIsSubmitted = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <div className={`${styles.panel} ${styles.center}`}>
      <img src="./illustration-thank-you.svg" alt="Thank you illustration" />
      <p className={styles.ratingSelected}>
        You selected {selectedRating} out of 5
      </p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hasitate to get in touch!
      </p>
    </div>
  ) : (
    <form onSubmit={handleIsSubmitted} className={styles.panel}>
      <svg
        className={styles.icon}
        viewBox="0 0 32 32"
        width="18"
        height="18"
        stroke="currentColor"
        fill="currentColor"
      >
        <path d="M16 2l-4.5 9.2-10.2 1.5 7.3 7.2L6.9 30l9.1-4.8L25.1 30l-1.7-10.1 7.3-7.2-10.1-1.5Z" />
      </svg>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button type="button" onClick={() => handleSelectedRating(rating)}>
            {rating}
          </button>
        ))}
      </div>

      <button disabled={selectedRating ? false : true}>Submit</button>
    </form>
  );
}
