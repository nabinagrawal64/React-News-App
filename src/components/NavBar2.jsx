import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar2() {
	const [activeTab, setActiveTab] = useState("/"); // State to track the active tab

	const handleTabClick = (path) => {
		setActiveTab(path); // Update the active tab when a menu item is clicked
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					{/* Button */}
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							{/* Home */}
							<li className="nav-item">
								<Link
									className={`nav-link ${activeTab === "/" ? "fw-bold" : ""}`}
									to="/"
									onClick={() => handleTabClick("/")}
								>
									Home
								</Link>
							</li>
							{/* Entertainment */}
							<li className="nav-item">
								<Link
									className={`nav-link ${activeTab === "/Entertainment" ? "fw-bold" : ""}`}
									to="/Entertainment"
									onClick={() => handleTabClick("/Entertainment")}
								>
									Entertainment
								</Link>
							</li>
							{/* Technology */}
							<li className="nav-item">
								<Link
									className={`nav-link ${activeTab === "/Technology" ? "fw-bold" : ""}`}
									to="/Technology"
									onClick={() => handleTabClick("/Technology")}
								>
									Technology
								</Link>
							</li>			
							{/* Business */}
							<li className="nav-item">
								<Link
									className={`nav-link ${activeTab === "/Business" ? "fw-bold" : ""}`}
									to="/Business"
									onClick={() => handleTabClick("/Business")}
								>
									Business
								</Link>
							</li>
							{/* Health */}
							<li className="nav-item">
								<Link
									className={`nav-link ${activeTab === "/Health" ? "fw-bold" : ""}`}
									to="/Health"
									onClick={() => handleTabClick("/Health")}
								>
									Health
								</Link>
							</li>
							{/* Science */}
							<li className="nav-item">
								<Link
									className={`nav-link ${activeTab === "/Science" ? "fw-bold" : ""}`}
									to="/Science"
									onClick={() => handleTabClick("/Science")}
								>
									Science
								</Link>
							</li>
							{/* Sports */}
							<li className="nav-item">
								<Link
									className={`nav-link ${activeTab === "/Sports" ? "fw-bold" : ""}`}
									to="/Sports"
									onClick={() => handleTabClick("/Sports")}
								>
									Sports
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar2;
