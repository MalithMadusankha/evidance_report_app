import "./App.css";
import SideBar from "./SideBar";
import TopNavBar from "./TopNavBar ";

function App() {
  return (
    <div className="App">
      <div className="container-background"></div>
      <div className="wrapper">
        <SideBar />

        <div className="main">
          <TopNavBar />

          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h3 mb-3 main-header-bg">
                Free download Evidence Report
              </h1>

              <div className="row">
                <div className="col-xl-6 col-xxl-5 d-flex">
                  <div className="w-100">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0 mb-3">
                                <h5 className="card-title">
                                  Download Instantly
                                </h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="bx bx-download"
                                    style={{ fontSize: 26 }}
                                  ></i>
                                </div>
                              </div>
                              <div className="col mt-0">
                                <h5 className="mt-1 mb-1">
                                  Word and PDF Formats Download Instantly
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0 mb-3">
                                <h5 className="card-title">Absolutly Free</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    class="bx bx-dollar-circle"
                                    style={{ fontSize: 26 }}
                                  ></i>
                                </div>
                              </div>
                              <div className="col mt-0">
                                <h5 className="mt-1 mb-1">
                                  Absolutly Free No Need to Pay{" "}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-xxl-7">
                  <div className="card flex-fill w-100">
                    <div className="card-body py-3">
                      <div className="row">
                        <div className="col mt-0 mb-3">
                          <h5 className="card-title">Recent Movement</h5>
                        </div>
                      </div>
                      <div className="pt-2 mb-3">
                        <input type="file" />
                        <small className="form-text text-muted">
                          Drag and drop or browse file which you want to scan.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <a className="text-muted" href="#" target="">
                      <strong>Evidence Report</strong>
                    </a>
                    &copy;
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
