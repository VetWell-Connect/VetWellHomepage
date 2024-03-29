import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function UserReviews() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4 bold">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Don't just take it from us, Hear from other service individuals who have benefited from VetWell Connects services!
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://cdn2.picryl.com/photo/2013/03/27/pictured-is-us-army-lt-col-anthony-g-glaude-the-c0ddc1-1024.jpg"
              className="rounded-circle shadow-1-strong"
              width="175"
              height="200"
            />
          </div>
          <h5 className="mb-3 bold">Jacob Glaude</h5>
          <h6 className="text-primary mb-3">Navy Lieutenant</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Vetwell stands out for its user-friendly interface. 
            With intuitive search features and extensive listings, veterans can effortlessly discover practitioners and services tailored to their needs. 
            Whether it's locating an acupuncturist or connecting with 
            an herbalist, they truly empower veterans to navigate their health journey with confidence and ease.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2102/6521599/1000w_q95.jpg"
              className="rounded-circle shadow-1-strong"
              width="175"
              height="200"
            />
          </div>
          <h5 className="mb-3 bold">Jacinta Rodriguez</h5>
          <h6 className="text-primary mb-3">Air Force Sergeant</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            As a veteran, navigating the complexities of healthcare can often be daunting. However, thanks to VetWell Connect, 
            the journey towards comprehensive wellness has become remarkably streamlined and empowering. 
            This innovative platform stands as a beacon of hope, offering a range of alternative medical solutions tailored specifically for veterans.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://www.army.mil/e2/images/rv7/asianpacificamericans/slides/AAI-homepage-slideshow2_mobile.jpg"
              className="rounded-circle shadow-1-strong"
              width="175"
              height="200"
            />
          </div>
          <h5 className="mb-3 bold">Ryan Chang</h5>
          <h6 className="text-primary mb-3">Army Corporal</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Thanks to VetWell Connect, I have found a network of service individuals 
            like me who understand the unique challenges and experiences of being a veteran, 
            providing invaluable support and camaraderie on my journey towards holistic wellness.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default UserReviews;