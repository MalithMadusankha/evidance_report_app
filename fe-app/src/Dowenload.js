import "./App.css";
import SideBar from "./SideBar";
import TopNavBar from "./TopNavBar ";


function Dowenload() {
  return (
    <div className="App">
      <div className="container-background"></div>
      <div className="wrapper">
        <SideBar/>

        <div className="main">
        <TopNavBar/>

        <main class="content">
				<div class="container-fluid p-0">

					<h1 class="h3 mb-3 main-header-bg">Download Your Extract Document Here</h1>


					<div class="row">
						<div class="col-md-6">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col-auto">
											<div class="stat text-primary">
												<i class="align-middle" data-feather="file-text"></i>
											</div>
										</div>
										<div class="col mt-0">
											<h5 class="card-title"> Word Document</h5>
											<h5 class="mt-1 mb-1 ">Your genarated extract document can download as a
												word document here</h5>
										</div>
									</div>
									<div class="row">
										<div class="col text-center mt-3">
											<a href="#" class="btn btn-primary btn-lg"> <span> <i
														class="align-middle mr-2" data-feather="download"></i> Download
													Word Document</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col-auto">
											<div class="stat text-primary">
												<i class="align-middle" data-feather="file-text"></i>
											</div>
										</div>
										<div class="col mt-0">
											<h5 class="card-title"> PDF Document</h5>
											<h5 class="mt-1 mb-1">Your genarated extract document can download as a PDF
												document here</h5>
										</div>
									</div>
									<div class="row">
										<div class="col text-center mt-3">
											<a href="#" class="btn btn-primary btn-lg"><span> <i
														class="align-middle mr-2" data-feather="download"></i> Download
													PDF Document</span></a>
										</div>
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

export default Dowenload;
