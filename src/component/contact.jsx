const Contact = () =>{
    return (
        <div>
            {/* ======= Contact Section ======= */}
<section id="contact" className="contact">
  <div className="container">
    <div className="section-title">
      <h2>Contact</h2>
      <p>Sebagai seorang pengembang UI/UX dan frontend yang antusias, saya sangat ingin terhubung dan menjelajahi bagaimana keterampilan dan hasrat saya dalam menciptakan pengalaman digital yang mulus dapat berkontribusi pada kesuksesan proyek Anda. Mari memulai percakapan dan menciptakan sesuatu yang luar biasa bersama!</p>
    </div>
    <div className="row" data-aos="fade-in">
      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt" />
            <h4>lokasi:</h4>
            <p>airmadidi,sulawesi utara, indonesia</p>
          </div>
          <div className="email">
            <i className="bi bi-envelope" />
            <h4>Email:</h4>
            <p>student@unklab.ac.id</p>
          </div>
          <div className="phone">
            <i className="bi bi-phone" />
            <h4>Call:</h4>
            <p>0852 9920 5670</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen />
        </div>
      </div>
      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Email</label>
              <input type="email" className="form-control" name="email" id="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Message</label>
            <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  </div>
</section>{/* End Contact Section */}

        </div>
    )
}
export default Contact;