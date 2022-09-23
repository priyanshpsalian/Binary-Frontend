import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Navbar/navbarHome";
import "../Header/style.css";
import "../Header/bootstrap.min.css";
import "./FormGroup.css";

const UserSignUp = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const auth = localStorage.getItem("user");
		if (auth) {
			navigate("/");
		}
	});

	const [user, setUser] = useState({
		// username: "",
		organisationname: "",
		organiser: "",
		description: "",
		tags: "",
		image: "",
		datetime: "",
		location: "",
		city: "",
		state: "",
		country: "",
		// likes: Number,
		// eventarray: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const register = async () => {
		console.log(user, "int");
		const {
			organisationname,
			organiser,
			description,
			tags,
			image,
			datetime,
			location,
			city,
			state,
			country,
		} = user;

		let result = await fetch(
			"http://localhost:5000/community/CommunityRegister",
			{
				method: "post",
				body: JSON.stringify(user),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			}
		);
		let stat = await result.status;
		console.log(stat);
		console.log("here");
		// console.log(typeof(stat));

		result = await result.json();
		console.log(result, "result");
		localStorage.setItem("user", JSON.stringify(result));
		navigate("/");
	};

	return (
		<>
			<div className="page-wrapper">
				<Nav />

				<section
					className="page-header"
					// style="background-image: url(assets/images/background/inner-banner-bg.png);"
					style={{
						// backgroundImage: `url(process.env.PUBLIC_URL + '${bg})`,
						backgroundImage: `url(banner-bg-1-1.png)`,
					}}
				>
					<div className="suForm row mx-auto">
						<div className="col-md-10 mx-auto">
							<div className="apply-wrapper mt-5">
								<h3 className="text-white">Group - Form</h3>

								<div className="apply_form bg_dark_9 p-5">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="organisationname">
													Organisation Name
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="organisationname"
													id="organisationname"
													required
													className="form-control"
													placeholder="Organisation Name"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="organisationname">
													Organiser
												</label>
												<input
													onChange={handleChange}
													type="text "
													name="organiser"
													id="organiser"
													required
													className="form-control"
													placeholder="Organisation Name"
												/>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="tags">
													Tags
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="tags"
													id="tags"
													required
													className="form-control"
													placeholder="Gender"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="image">
													Image
												</label>
												<input
													onChange={handleChange}
													type="text"
													className="form-control"
													name="image"
													id="image"
													required
													placeholder="Image"
												/>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="datetime">
													Date Time
												</label>
												<input
													onChange={handleChange}
													type="date"
													name="datetime"
													id="datetime"
													required
													className="form-control"
													placeholder="Interests"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="event">
													Event
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="event"
													id="event"
													className="form-control"
													placeholder="Event"
												/>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="location">
													Location
												</label>
												<input
													onChange={handleChange}
													type="text"
													className="form-control"
													name="location"
													id="location"
													placeholder="Location"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="city">
													City
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="city"
													id="city"
													className="form-control"
													placeholder="City"
												/>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="state">
													State
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="state"
													id="state"
													className="form-control"
													placeholder="State"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="country">
													Country
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="country"
													id="country"
													className="form-control"
													placeholder="Country"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group">
												<label htmlFor="description">
													description
												</label>
												<input
													onChange={handleChange}
													type="text"
													className="form-control"
													name="description"
													id="description"
													required
													placeholder="description"
												/>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-12 mx-auto text-center">
											<button
												type="submit"
												className="pri-btn mt-3"
												onClick={register}
											>
												Register
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
export default UserSignUp;
