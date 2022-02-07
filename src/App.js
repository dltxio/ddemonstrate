import "./App.css";

const App = () => {
  return (
    <div classNameName="App">
      <body id="page-top">
        <nav
          className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll" href="#page-top">
              ddemonstrate.org
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link js-scroll active" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#getinvolved">
                    Get Involved
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#events">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          id="home"
          className="intro route bg-image"
          // className="background-image: url(img/intro-bg.jpg)"
        >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <h1 className="intro-title mb-4">
                  Decentralised Demonstrations
                </h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items">
                    Blockchain based activisim,Powered by Ethereum,The future
                    will not be
                    centralised,ddemonstrate.eth,bc1qejx6pwfcvya5z3q5h2cua5wffz0n8rey4th2q9,PGP
                    Public Key Fingerprint
                    9ee37e66bac184e4cd13ce73a33304a5545027ca
                  </span>
                  <strong className="text-slider"></strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About</h5>
                        </div>
                        <p className="lead">
                          ddemonstrate provides a platform for anyone to freely
                          create and co-ordinate activist campaigns and to make
                          anonymous financial contributions via cryptocurrency.
                          By using cryptocurrencies and the Ethereum blockchain,
                          it allows safe and secure socialisation of
                          demonstrations.
                        </p>
                        <p className="lead">
                          The platform enables supporters and contributors of
                          the cause who could not otherwise participate, to
                          donate funds securely and anonymously without
                          requiring third party banks or payment gateways who
                          can reverse transactions or close accounts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="getinvolved" className="services-mf route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Get involved</h3>
                  <p className="subtitle-a">
                    "Silence in the face of evil is itself evil"
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="ion-calendar"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Activate</h2>
                    <p className="s-description text-center">
                      Use ddemonstrate.org to co-ordinate your event in a safe
                      and secure way
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="ion-cash"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Donate</h2>
                    <p className="s-description text-center">
                      Individual campaigns can be funded by Ethereum only by
                      selecting one below. Or if you wish to donate to the
                      project to help development costs: BTC
                      bc1qejx6pwfcvya5z3q5h2cua5wffz0n8rey4th2q9
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="ion-ribbon-a"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Participate</h2>
                    <p className="s-description text-center">
                      Participants who attend in person can earn digtal
                      attestations for their attendance via{" "}
                      <ah href="https://www.poap.xyz">poap.xyz</ah> Developers
                      can submit pull requests via{" "}
                      <a href="https://github.com/ddemonstrate">GitHub</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="section-counter paralax-mf bg-image"
          // className="background-image: url(img/counters-bg.jpg)"
        >
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="ion-checkmark-round"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p className="counter">450</p>
                    <span className="counter-text">EVENTS ADDED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="ion-ios-people"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p className="counter">550</p>
                    <span className="counter-text">ETH RAISED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="ion-ribbon-a"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p className="counter">36</p>
                    <span className="counter-text">AWARD WON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="events" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Events</h3>
                  <p className="subtitle-a">
                    The below events are stored in the smart contract 0x
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>

            <ddemo-list
              web3host="https://ropsten.infura.io/v3/eaf5e0b4a01042a48211762c8d4eec44"
              contract="0xca73a7d5Af7FB4673E6a7D9ad4c64D9ecCa585B9"
            ></ddemo-list>
          </div>
        </section>

        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          // style="background-image: url(img/overlay-bg.jpg)"
        >
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">Get in Touch</h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            Your ideas, contributions and opinions are important
                            to us. Please contact us with your questions,
                            comments and recommendations, we look forward to
                            hearing from you.
                            <a href="publickey.ddemonstrate@protonmail.com-2.asc">
                              PGP Public Key
                            </a>{" "}
                            | Fingerprint
                            9ee37e66bac184e4cd13ce73a33304a5545027ca
                          </p>
                          <ul className="list-ico">
                            <li>
                              <span className="ion-ios-location"></span>{" "}
                              ddemonstrate.eth
                            </li>
                            <li>
                              <span className="ion-email"></span>{" "}
                              ddemonstrate@protonmail.com
                            </li>
                          </ul>
                        </div>
                        <div className="socials">
                          <ul>
                            <li>
                              <a href="https://www.twitter.com/ddemonstrate">
                                <span className="ico-circle">
                                  <i className="ion-social-twitter"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.github.com/ddemonstrate">
                                <span className="ico-circle">
                                  <i className="ion-social-github"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="copyright-box">
                    <p className="copyright">
                      &copy; Copyright <strong>DevFolio</strong>. All Rights
                      Reserved
                    </p>
                    <div className="credits">
                      Designed by{" "}
                      <a href="https://bootstrapmade.com/">BootstrapMade</a> |
                      Images by
                      https://unsplash.com/photos/MJNuWswcAao?utm_source=twitter&utm_medium=referral&utm_content=creditShareLink
                      | Open Source icons https://ionicons.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </body>
    </div>
  );
};

export default App;
