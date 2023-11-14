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
              alasan saya memilih falkutas ini karena saya sangat tertarik dengan dunia maya 
              yg dimana disini kita bisa juga ber karya sesuka kita 
              dan ya itu pilihan saya
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
              <h3>Frontend Developer</h3>
              <p className="fst-italic">
                saya adalah seorang
                frontend developer yang berkomitmen tinggi terhadap:
                <br/>
                - Kualitas Kode: Menulis kode bersih dan sesuai standar.
                <br/>
                - Belajar Berkelanjutan: Terus mengikuti perkembangan teknologi.
                <br/>
                - Responsif terhadap Desain: Cepat merespons perubahan desain.
                <br/>
                - Pengalaman Pengguna: Fokus pada antarmuka pengguna yang baik.
                <br/>
                - Kerja Tim Efektif: Kolaborasi dengan anggota tim.
                <br/>
                - Pemecahan Masalah Kreatif: Mengatasi tantangan teknis dengan kreativitas.
                <br/>
                - Pentingnya Pengujian: Praktik pengujian untuk kualitas kode.
                <br/>
                - Pemeliharaan Berkelanjutan: Memelihara dan meningkatkan kode secara teratur.
                <br/>
                - Kesadaran Keamanan: Implementasi praktik keamanan dalam pengembangan.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                  <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>ultah:</strong> <span>8 jan 2004</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>https://cv-gerry.vercel.app/</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>nomor telepon:</strong>{" "}
                      <span>0812*4*1***6</span>
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
                      <strong>umur:</strong> <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>sarjana:</strong>{" "}
                      <span>sarjana komputer (s1)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>email:</strong> <span>s2211****student@unklab.ac.id</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>tidak tersedia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                {/* bisa di berikan Text tambahan */}
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
