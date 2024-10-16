const Footer = () => {
  return (
    <>
      <footer className="text-white py-16" style={{ backgroundColor: 'rgb(0, 195, 95)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-3xl md:text-xl mb-4">Quick Links</h4>
              <ul>
                <li className="mb-2"><a href="#">Exchange</a></li>
                <li className="mb-2"><a href="#">Testimonials</a></li>
                <li><a href="#">Affiliate</a></li>
              </ul>
            </div>

            {/* Terms & Support */}
            <div>
              <h4 className="text-3xl md:text-xl mb-4">Terms & Support</h4>
              <ul>
                <li className="mb-2"><a href="#">Frequently Asked Questions</a></li>
                <li className="mb-2"><a href="#">Terms Of Services</a></li>
                <li className="mb-2"><a href="#">Privacy Policy</a></li>
                <li className="mb-2"><a href="#">About</a></li>
                <li className="mb-2"><a href="#">Data Deletion Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-3xl md:text-xl mb-4">Follow us on</h4>
              <ul>
                <li className="mb-2 flex items-center">
                  <i className="fab fa-whatsapp mr-2"></i> Whatsapp
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fab fa-facebook mr-2"></i> Facebook
                </li>
                <li className="mb-2 flex items-center">
                  <i className="fab fa-youtube mr-2"></i> YouTube
                </li>
                <li className="flex items-center">
                  <i className="fab fa-android mr-2"></i> Our App
                </li>
              </ul>
            </div>

            {/* Language */}
            <div>
              <h4 className="text-3xl md:text-xl mb-4">Language</h4>
              <p>English</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright section outside the container to span full width */}
      <div className="text-center text-sm text-white w-full" style={{ backgroundColor: 'rgb(60, 60, 60)' }}>
        <p className="py-5">Copyright © 2024 Exchange Bari</p>
      </div>
    </>
  );
};

export default Footer;
