import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="Media_photos\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/dashboard "
        learnMore="https://support.zerodha.com/category/trading-and-markets/trading-faqs/general/articles/everything-you-need-to-know-to-get-started-with-your-zerodha-account#:~:text=To%20learn%20more%2C%20visit%20zerodha.com%2Fz%2Dconnect."
        googlePlay="https://play.google.com/"
        appStore="https://www.apple.com/in/app-store/"
      />
      <RightSection
        imageURL="Media_photos\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. "
        learnmore="https://support.zerodha.com/category/trading-and-markets/trading-faqs/general/articles/everything-you-need-to-know-to-get-started-with-your-zerodha-account#:~:text=To%20learn%20more%2C%20visit%20zerodha.com%2Fz%2Dconnect."
       
      />
      <LeftSection
        imageURL="Media_photos\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/dashboard "
        learnMore="https://support.zerodha.com/category/trading-and-markets/trading-faqs/general/articles/everything-you-need-to-know-to-get-started-with-your-zerodha-account#:~:text=To%20learn%20more%2C%20visit%20zerodha.com%2Fz%2Dconnect."
        googlePlay="https://play.google.com/"
        appStore="https://www.apple.com/in/app-store/"
      />
       <RightSection
        imageURL="Media_photos\kiteconnect.png"
        productName="Kite-Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore="https://zerodha.com/products/api/"
      />
      <LeftSection
        imageURL="Media_photos\varsity.png"
        productName="Varsity"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="https://kite-demo.zerodha.com/dashboard "
        learnMore="https://support.zerodha.com/category/trading-and-markets/trading-faqs/general/articles/everything-you-need-to-know-to-get-started-with-your-zerodha-account#:~:text=To%20learn%20more%2C%20visit%20zerodha.com%2Fz%2Dconnect."
        googlePlay="https://play.google.com/"
        appStore="https://www.apple.com/in/app-store/"
      />

      <Universe />
    </>
  );
}

export default ProductsPage;
