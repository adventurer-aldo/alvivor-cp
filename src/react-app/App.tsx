// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main className="min-vh-100 bg-dark text-light">
			<nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary px-4">
				<a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
					<img src={viteLogo} height="28" />
					Alvivor
				</a>

				<div className="navbar-nav ms-auto gap-3">
					<a className="nav-link" href="#">Menu</a>
					<a className="nav-link" href="#">Current Season</a>
					<a className="nav-link" href="#">Past Seasons</a>
					<a className="nav-link" href="#">Statistics</a>
				</div>
			</nav>

			<section className="container py-5">
				<div className="row align-items-center min-vh-100">
					<div className="col-lg-8">
						<p className="text-uppercase text-warning fw-bold">
							Discord Online Reality Game
						</p>

						<h1 className="display-1 fw-bold d-flex align-items-center gap-3">
							<img src={reactLogo} height="60" />
							Alvivor
						</h1>

						<h2 className="mb-4">
							Next-level Discord Online Reality Game
						</h2>

						<p className="lead text-secondary">
							Compete, scheme, survive, and vote your way through intense
							Discord seasons built around strategy, social play, challenges,
							and dramatic eliminations.
						</p>

						<div className="d-flex gap-3 mt-4">
							<button className="btn btn-warning btn-lg">
								Current Season
							</button>

							<button className="btn btn-outline-light btn-lg">
								Past Seasons
							</button>

							<button
								className="btn btn-secondary btn-lg"
								onClick={() => setCount(count + 1)}
							>
								Test Button ({count})
							</button>
						</div>

						<div className="mt-5 d-flex gap-4 align-items-center opacity-75">
							<img src={honoLogo} height="40" />
							<img src={cloudflareLogo} height="40" />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;