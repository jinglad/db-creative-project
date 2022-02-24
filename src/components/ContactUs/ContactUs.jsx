import styled from "styled-components";

function ContactUs() {
  return (
    <ContactUsContainer>
      <div className="row">
        <div className="col-md-5 ml-5 mr-5">
          <ContactUsLeftHeading>
            Let us handle your project, professionally.
          </ContactUsLeftHeading>
          <ContactUsLeftContent>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </ContactUsLeftContent>
        </div>
        <div className="col-md-5 ml-5">
          <form>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your email address"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your name / comapny's name"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols="15"
                rows="5"
                className="form-control form-control-lg"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <input type="submit" className="btn btn-dark" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <div>
        <FooterText>Copyright Orange labs 2020</FooterText>
      </div>
    </ContactUsContainer>
  );
}

export default ContactUs;

const ContactUsContainer = styled.div`
  background: #fbd062;
  margin-top: 120px;
  padding-top: 5rem;
  padding-left: 5rem;
  padding-bottom: 1rem;
  padding-right: 5rem;
`;

const ContactUsLeftHeading = styled.h2`
  font-weight: bold;
  font-size: 3.7rem;
`;

const ContactUsLeftContent = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const FooterText = styled.p`
  margin-top: 5rem;
  text-align: center;
  font-size: 1.2rem;
`;
