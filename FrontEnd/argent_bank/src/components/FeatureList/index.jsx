import React from "react";
import "../../style/FeatureList/featureList.css";
import Feature from "../../components/Feature";
import chatIcon from "../../assets/icon-chat1.webp";
import moneyIcon from "../../assets/icon-money1.webp";
import securityIcon from "../../assets/icon-security1.webp";

function FeatureList() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature
        image={chatIcon}
        title={"You are our #1 priority"}
        text={`Need to talk to a representative? You can get in touch through our24/7 chat or through a phone call in less than 5 minutes.`}
      />
      <Feature
        image={moneyIcon}
        title={"More savings means higher rates"}
        text={`The more you save with us, the higher your interest rate will be!`}
      />
      <Feature
        image={securityIcon}
        title={"Security you can trust"}
        text={`We use top of the line encryption to make sure your data and money is always safe.`}
      />
    </section>
  );
}

export default FeatureList;
