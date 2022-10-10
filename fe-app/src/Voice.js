import "./App.css";
import SideBar from "./SideBar";
import TopNavBar from "./TopNavBar ";


function Voice() {
  return (
    <div className="App">
      <div className="container-background"></div>
      <div className="wrapper">
        <SideBar/>

        <div className="main">
        <TopNavBar/>
        <main class="content">
				<div class="container-fluid p-0">

					<h1 class="h3 mb-3 main-header-bg">Input Voices</h1>


					<div class="row">
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 1</h5>
								</div>
								<img class="card-img-top" src="img/photos/c.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 2</h5>
								</div>
								<img class="card-img-top" src="img/photos/c1.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 3</h5>
								</div>
								<img class="card-img-top" src="img/photos/c2.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 4</h5>
								</div>
								<img class="card-img-top" src="img/photos/c3.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 5</h5>
								</div>
								<img class="card-img-top" src="img/photos/c4.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 6</h5>
								</div>
								<img class="card-img-top" src="img/photos/c5.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 7</h5>
								</div>
								<img class="card-img-top" src="img/photos/c6.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-md-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Voice 8 </h5>
								</div>
								<img class="card-img-top" src="img/photos/c7.jpg" alt="Unsplash"/>
								<div class="card-body text-center">
									<p class="card-text">Some quick example text to build on the card title and make up
										the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Add Voice</a>
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

export default Voice;
