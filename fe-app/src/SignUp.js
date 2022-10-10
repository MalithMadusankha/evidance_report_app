import React from 'react'

export default function SignUp() {
    return(
        <>
   <div class="container-background"></div>
	<main class="d-flex w-100">
		<div class="container d-flex flex-column">
			<div class="row vh-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="card">
							<div class="text-center mt-4">
								<h1 class="h2">Sign Up</h1>
								<p class="lead">
									Create your account to continue
								</p>
							</div>

							<div class="card-body">
								<div class="m-sm-4">
									<form>
										<div class="mb-3">
											<label class="form-label">Name</label>
											<input class="form-control form-control-lg" type="text" name="name"
												placeholder="Enter your name" />
										</div>
										<div class="mb-3">
											<label class="form-label">Company</label>
											<input class="form-control form-control-lg" type="text" name="company"
												placeholder="Enter your company name" />
										</div>
										<div class="mb-3">
											<label class="form-label">Email</label>
											<input class="form-control form-control-lg" type="email" name="email"
												placeholder="Enter your email" />
										</div>
										<div class="mb-3">
											<label class="form-label">Password</label>
											<input class="form-control form-control-lg" type="password" name="password"
												placeholder="Enter password" />
										</div>
										<div class="text-center mt-3">
											<a href="/home" class="btn btn-lg btn-primary">Sign up</a>
											{/*  <button type="submit" class="btn btn-lg btn-primary">Sign up</button>  */}
										</div>
										<div class="text-center mt-5">
											<p>
												Already a member? <a href="/signin">Log In</a>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</main>
        </>
    )
}