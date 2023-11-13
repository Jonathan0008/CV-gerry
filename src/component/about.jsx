const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              saya merupakan seorang mahasiswa dan saat ini sedang mengambil
              jurusan informatika di falkutas ilmu komputer universitas klabat.
              alasan saya memilih falkutas ini karena sudah menjadi kebiasaan
              saya kecil selalu berinteraksi dengan komputer.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="src/assets/img/gerry.png"
                className="img-fluid"
                alt
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>UI/UX Designer</h3>
              <p className="fst-italic">
                Dalam dunia teknologi yang dinamis, saya adalah seorang
                pengembang UI/UX dan frontend yang berkomitmen untuk menciptakan
                antarmuka digital yang mendalam, yang tidak hanya memikat secara
                visual tetapi juga meningkatkan pengalaman pengguna ke level
                yang baru.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>ultah:</strong> <span>7 oct 2003</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.res.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>nomor telepon:</strong>{" "}
                      <span>0852 9920 5670</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>kota:</strong> <span>airmadidi, indoensia</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>umur:</strong> <span>20</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>sarjana:</strong>{" "}
                      <span>sarjana komputer (s1)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>email:</strong> <span>student@unklab.ac.id</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>tidak tersedia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Saat saya terus menjelajahi lanskap teknologi yang selalu
                berkembang, saya merasakan kepuasan besar dalam menantang
                batasan-batasan pengembangan UI/UX dan frontend. Perjalanan saya
                melampaui kode; ini tentang menciptakan hubungan yang berarti
                antara pengguna dan produk digital. Dengan perpaduan kreativitas
                dan keahlian teknis, saya berkomitmen untuk membentuk masa depan
                pengalaman pengguna, memastikan bahwa setiap interaksi
                meninggalkan kesan yang abadi. Bergabunglah dalam petualangan
                menarik ini, di mana inovasi bertemu estetika, dan bersama-sama,
                kita dapat mendefinisikan ulang cara orang berinteraksi dengan
                dunia digital.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};
export default About;
