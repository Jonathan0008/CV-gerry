const Testimonials = () => {
    return (
        <div>
            {/* ======= Testimonials Section ======= */}
<section id="testimonials" className="testimonials section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Testimonials</h2>
      <p>Bekerja dengan [quaresma] adalah perubahan besar! Keahlian mereka dalam desain UI/UX dan pengembangan frontend mengubah keberadaan digital kami. Solusi inovatif, eksekusi yang mulus, dan komitmen sejati untuk keunggulan - mereka melampaui harapan kami di setiap langkah.</p>
    </div>
    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-item" data-aos="fade-up">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Bekerja sama dengan [quaresma] adalah pengalaman positif bagi tim kami. Keahlian mereka dalam desain UI/UX dan pengembangan frontend secara signifikan meningkatkan keberadaan digital kami, dan solusi inovatif mereka memberikan perbaikan berharga pada pengalaman pengguna kami. Kami menghargai komitmen mereka terhadap keunggulan dan dengan senang hati merekomendasikan kontribusi mereka untuk setiap proyek.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item" data-aos="fade-up" data-aos-delay={100}>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item" data-aos="fade-up" data-aos-delay={200}>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item" data-aos="fade-up" data-aos-delay={300}>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item" data-aos="fade-up" data-aos-delay={400}>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
          </div>
        </div>{/* End testimonial item */}
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>{/* End Testimonials Section */}


        </div>
    )
}
export default Testimonials;