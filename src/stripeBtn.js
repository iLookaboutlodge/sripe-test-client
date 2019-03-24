import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const stripeBtn = () => {
  const publishableKey = "strip_test_tokeni";
  let userid = 1;
  const onToken = token => {
    const body = {
      product: "dataset1",
      description: "nyc dataset",
      stripeTokenType: token.type,
      stripeEmail: token.email,
      stripeToken: token.id,
      amount: 999,
      token: token
  };
  axios
      .post("stripe_charge_url" + userid, body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Pay" //Component button text
      name="Rebloc" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Pay with 💳" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      image="https://www.rebloc.io/img/favicon.png" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default stripeBtn;
