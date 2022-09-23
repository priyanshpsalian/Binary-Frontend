import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Navbar/navbarHome";
import "../Header/style.css";
import "../Header/bootstrap.min.css";
// import "./Form.css";

import formGroupFieldData from "./FormGroupFieldData";

const FormEvent = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const auth = localStorage.getItem("user");
		if (auth) {
			navigate("/");
		}
	});

	const [user, setUser] = useState({
		name: "",
		datetime: "",
		speaker: "",
		organiser: "",
		image: "",
		mode: "",
		city: "",
		state: "",
		country: "",
		location: "",
		tages: "",
		preference: "",
		description: "",
		numofseats: "",
		likes: "",
		numofseatsleft: "",
		cost: "",
		communityname: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const register = async () => {
		// console.log(user, "int");
		// const {
		// 	organisationname,
		// 	organiser,
		// 	description,
		// 	tags,
		// 	image,
		// 	datetime,
		// 	location,
		// 	city,
		// 	state,
		// 	country,
		// } = user;

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
		// console.log(stat);
		// console.log("here");
		// console.log(typeof(stat));
		console.log("helo tmkc");

		// result = await result.json();
		// console.log(result, "result");
		// localStorage.setItem("user", JSON.stringify(result));
		console.log("tmkc");
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
										{formGroupFieldData.map(
											(
												{ label, idname, required },
												index
											) => (
												<div
													className="col-md-6"
													key={index}
												>
													<div className="form-group">
														<label htmlFor={idname}>
															{label}
														</label>
														<input
															onChange={
																handleChange
															}
															type="text "
															name={idname}
															id={idname}
															required={required}
															className="form-control"
															placeholder={label}
														/>
													</div>
												</div>
											)
										)}
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
export default FormEvent;
