import React from "react";
import '../style.css';
import '../bootstrap.min.css';

const headertitle=()=>{
    return (
      <>
        <section
          className="banner-one"
          id="banner"
          style={{
            // backgroundImage: `url(process.env.PUBLIC_URL + '${bg})`,
            backgroundImage: `url(banner-bg-1-1.png)`,
          }}
        >
          <img
            src="assets/images/shapes/banner-shapes-1-1.png"
            alt=""
            className="banner-one__shape-1"
          />
          <img
            src="assets/images/shapes/banner-shapes-1-2.png"
            alt=""
            className="banner-one__shape-2"
          />

          <img
            src="assets/images/shapes/banner-shapes-1-4.png"
            alt=""
            className="banner-one__shape-4"
          />
          <img
            src="assets/images/shapes/banner-shapes-1-5.png"
            alt=""
            className="banner-one__shape-5"
          />
          <img
            src="assets/images/shapes/banner-shapes-1-6.png"
            alt=""
            className="banner-one__shape-6"
          />
          <img
            src="assets/images/shapes/banner-shapes-1-7.png"
            alt=""
            className="banner-one__shape-7"
          />

          <div className="container">
            <img
              src="assets/images/shapes/banner-shapes-1-3.png"
              alt=""
              className="banner-one__shape-moc-1"
            />
            <img
              src="assets/images/mocs/VNU_M451_09.png"
              width="692px"
              alt=""
              className="banner-one__moc"
            />
            <div className="row">
              <div className="col-lg-7">
                <div className="banner-one__content">
                  <p className="banner-one__tag-line">
                    Welcome to SEO Business{" "}
                    <a className="txtDecNone" href="#">
                      free trial
                    </a>
                  </p>
                  <h3>
                    We help achieve <br /> biggest goals
                  </h3>
                  <p>
                    We are committed to providing our customers with exceptional
                    service <br /> while offering our employees the best
                    training.
                  </p>
                  <a
                    href="#contact"
                    data-target="#contact"
                    className="thm-btn banner-one__btn scroll-to-target"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default headertitle;