import { NavLink, Outlet } from "react-router-dom";
import "../LayoutStyling.scss";

export const Layout = () => {
	return (
		<>
			<header>
				<p>The Zoo</p>
			</header>
			<nav>
				<ul>
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"/Animals"}>Animals</NavLink>
					</li>
					<li>
						<NavLink to={"/About"}>About</NavLink>
					</li>
				</ul>
			</nav>
			<main>
				<Outlet></Outlet>
			</main>
			<footer>
				<p>Retzerbil coding LLC</p>
			</footer>
		</>
	);
};
