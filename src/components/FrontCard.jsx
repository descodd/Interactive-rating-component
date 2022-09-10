import Card from "./Card";
import { ReactComponent as Iconstar } from "../assets/icon-star.svg";
import { useState } from "react";
import BackCard from "./BackCard";

function FrontCard() {
  const [rating, setRating] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const handleClick = (e) => {
    setRating(+e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setShowCard(true);
    }
  };

  const showCardBlock = (
    <Card>
      <div className="icon-wrapper">
        <Iconstar />
      </div>
      <div className="text-container">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering
        </p>
      </div>
      <div className="rating">
        <input
          type="button"
          id="num1"
          name="rating"
          value="1"
          onClick={handleClick}
          className={rating === 1 ? "rating-btn active" : "rating-btn"}
        />
        <input
          type="button"
          id="num2"
          name="rating"
          value="2"
          onClick={handleClick}
          className={rating === 2 ? "rating-btn active" : "rating-btn"}
        />
        <input
          type="button"
          id="num3"
          name="rating"
          value="3"
          onClick={handleClick}
          className={rating === 3 ? "rating-btn active" : "rating-btn"}
        />
        <input
          type="button"
          id="num4"
          name="rating"
          value="4"
          onClick={handleClick}
          className={rating === 4 ? "rating-btn active" : "rating-btn"}
        />
        <input
          type="button"
          id="num5"
          name="rating"
          value="5"
          onClick={handleClick}
          className={rating === 5 ? "rating-btn active" : "rating-btn"}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className={rating ? "btn" : "btn disabled"}
      >
        Submit
      </button>
    </Card>
  );

  return (
    <>
      {!showCard && showCardBlock}
      {showCard && <BackCard value={rating} />}
    </>
  );
}

export default FrontCard;
