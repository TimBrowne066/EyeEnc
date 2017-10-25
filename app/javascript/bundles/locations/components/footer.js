import React from 'react';

const Footer = (props) => {
  return (
    <div classNameName="Footer">
      <footer>
          <div className="container">
          <div className="main-footer">
            <div className="row">
              <div className="col-md-4 col-sm-12 social">
                <a href="https://www.facebook.com/Eye-Encounters-192939874071785/"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/eyeencounters"><i className="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/eyeencounters/"><i className="fa fa-instagram"></i></a>
              </div>
              <div className="col-md-4 col-sm-12 year">
                <p className="footer-text">Eye Encounters</p>
                <p className="footer-text">1925 Chestnut St</p>
                <p className="footer-text">Philadelphia, PA 19145</p>
              </div>
              <div className="col-md-4 col-sm-12 copyright">
                <p className="footer-text">Copyright &copy; Eye Encounters 2017</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
