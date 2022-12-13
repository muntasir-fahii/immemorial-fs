import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="feature-l">
          <span className="feature-text">90'S TELEOHONE</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90's telephone"
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="feature-r">
          <span className="feature-text">90'S CASSETTE PLAYER</span>
          <img
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90's cassette"
          />
          <span
            className="feature-shutter-r"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
