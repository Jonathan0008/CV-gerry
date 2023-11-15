const Header = () => {
    return (
        <div>
            <div>
            {/* ======= Mobile nav toggle button ======= */}
            <i className="bi bi-list mobile-nav-toggle d-xl-none" />
            {/* ======= Header ======= */}
            <header id="header">
                <div className="d-flex flex-column">
                <div className="profile">
                    <img src="src/assets/img/gerryP.jpeg" alt className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Gerry Jonathan Runtu</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a href="https://www.instagram.com/ger_jr4/?next=%2Faccounts%2Fonetap%2F" className="instagram"><i className="bi bi-instagram" /></a>
                    <a href="https://github.com/Jonathan0008" className="github"><i className="bi bi-github" /></a>
                    <a href="https://www.facebook.com/gerry.runtu.94" className="facebook"><i className="bi bi-facebook" /></a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house" /> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person" /> <span>About</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bi bi-newspaper" /> <span>Portfolio</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-file-earmark" /> <span>Resume</span></a></li>
                    </ul>
                </nav>{/* .nav-menu */}
                </div>
            </header>{/* End Header */}
            </div>
        </div>
    )

}

export default Header;