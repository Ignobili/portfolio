export default function Challenge() {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1  center-content">
        <div className="col1-color">
          <div className="logo">
            <img src="./icon-sedans.svg" alt="sedans"></img>
          </div>
          <div className="header-of-columns">
            <h2>SEDANS</h2>
          </div>
          <div className="content-of-columns">
            <p>
              Choose a sedan for its 
               affordabillity and excellent 
               fuel economy.
               Ideal for cruising in the city or on 
               your next road trip.
            </p>
          </div>
          <button className="learn-more-button text1 border-2">Learn More</button>
        </div>
        <div className="col2-color">
          <div className="logo">
            <img src="./icon-suvs.svg" alt="suvs"></img>
          </div>
          <div className="header-of-columns">
            <h2>SUVS</h2>
          </div>
          <div className="content-of-columns">
            <p>
            Take an SUV for its spacious
             interior, power, and
             versality.
             Perfect for your
             next family vacation and
             off-road adventures.
            </p>
          </div>
          <button className="learn-more-button text2 border-2">Learn More</button>
        </div>
        <div className="col3-color">
          <div className="logo">
            <img src="./icon-luxury.svg" alt="luxury"></img>
          </div>
          <div className="header-of-columns">
            <h2>LUXURY</h2>
          </div>
          <div className="content-of-columns">
            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style!</p>
          </div>
          <button className="learn-more-button text3 border-2">Learn More</button>
        </div>
      </div>
    </div>
  );
}
