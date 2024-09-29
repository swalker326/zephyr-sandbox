import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";

export function App() {
	return (
		<React.Suspense fallback={null}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<h1>Hello World</h1>
						</>
					}
				/>
			</Routes>
		</React.Suspense>
	);
}

export default App;
