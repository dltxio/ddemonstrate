import "./App.css";

const App = () => {
  return (
    <div className="App">
      <body id="page-top">
        <nav
          class="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          id="mainNav"
        >
          <div class="container">
            <a class="navbar-brand js-scroll" href="#page-top">
              ddemonstrate.org
            </a>
            <button
              class="navbar-toggler collapsed"
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
              class="navbar-collapse collapse justify-content-end"
              id="navbarDefault"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link js-scroll active" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll" href="#getinvolved">
                    Get Involved
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll" href="#events">
                    Events
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </body>
    </div>
  );
};

export default App;
