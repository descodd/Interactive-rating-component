import React from "react";
import Card from "./Card";
import { ReactComponent as ThankYou } from "../assets/illustration-thank-you.svg";

function BackCard({ value }) {
  return (
    <Card>
      <div className="back-img">
        <ThankYou />
      </div>
      <div className="result">
        <p>You selected {value} out of 5</p>
      </div>

      <div className="thank-you">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
}

export default BackCard;
