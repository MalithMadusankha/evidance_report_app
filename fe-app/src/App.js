import { useState } from "react";
import "./App.css";
import SideBar from "./SideBar";
import TopNavBar from "./TopNavBar ";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [flPdf, setFlPdf] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const fileHandler = (event) => {
    console.log(
      "🚀 ~ file: index.js ~ line 9 ~ handleFileSelect ~ event",
      event.target.files[0]
    );
    setSelectedFile(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFlPdf(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };

  const onFileUpload = async (event) => {
    event.preventDefault();
    setIsloading(true);
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", selectedFile);

    // Details of the uploaded file
    console.log(selectedFile);
    setTimeout(() => {
      setIsloading(false);
      setIsSubmit(true);
    }, 3000);
    try {
      const response = await axios({
        method: "post",
        url: "ec2-54-242-87-59.compute-1.amazonaws.com:1113/evidence",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("data", response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
              {isloading ? (
                <div className="mt-5">
                  <Loading />
                </div>
              ) : isSubmit ? (
                <div className="row">
                  <h1>MISC 16-000010 </h1>
                  <h2>January 2, 2018</h2>
                  <h3>Suffolk, ss </h3>
                  <h4>PIPER, J.</h4>
                  <br />
                  <h3>Introduction </h3>
                  <br />
                  <p>
                    On January 7, 2016 Ocean City Development, LLC ("Plaintiff")
                    filed this complaint claiming breach of a contract for the
                    sale of real property, and asking the court to order
                    specific performance of that agreement. Plaintiff claims
                    that under a Purchase and Sale Agreement ("P&S Agreement")
                    signed October 21, 2015, Plaintiff agreed to purchase, and
                    Luiza Barros ("Defendant") agreed to sell, the improved
                    property ("Property") at 25 Saint Marks Road, Dorchester,
                    Boston, Suffolk County, Massachusetts. [Note 1] Defendant
                    has owned the Property, which contains three residential
                    units, since 1997. Plaintiff claims that while it has been
                    and remains ready, willing, and able to purchase the
                    Property according to the terms of the P&S Agreement,
                    Defendant, by refusing to execute a deed transferring the
                    Property, has breached the P&S Agreement. Defendant denies
                    that there exists any binding contract obligating her to
                    sell the Property to Plaintiff.{" "}
                  </p>

                  <p>
                    After trial, I conclude, on all of the evidence I credit,
                    that the P&S Agreement is a valid, binding, and enforceable
                    contract, and I direct entry of a judgment requiring
                    Defendant to perform her obligations under that contract.{" "}
                  </p>
                </div>
              ) : (
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
                          <form onSubmit={onFileUpload}>
                            <input type="file" onChange={fileHandler} />
                            <small className="form-text text-muted">
                              Drag and drop or browse file which you want to
                              scan.
                            </small>
                            <br />
                            <button
                              type="submit"
                              className="btn btn-success mt-3"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
