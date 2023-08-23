const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero-section">
          <div className="info">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="btn">
                <button className="btn-1">Show Now</button>
                <button className="btn-2">Category</button>
            </div>
            <div className="shop">
                <p>Also Available On</p>
                <div className="shops">
                    <img src="./images/flipkart.png" alt="flipkart-logo" />
                    <img src="./images/amazon.png" alt="amazon-logo" />
                </div>
            </div>
          </div>
          <div className="shoe-image">
            <img src="./images/shoe_image.png" alt="shoe-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
