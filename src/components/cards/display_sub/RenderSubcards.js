import React from "react";

// MENU CONSTANTS FOR SUBCARD TITLES

import { navbarCategories } from "../../../data/Constants";

// SUBCARDS
import CreateSubcards from "./CreateSubcards";

// PORTFOLIO
import TroyZada from "../content/portfolio/subcards/coding/TroyZada";
import Moodivity from "../content/portfolio/subcards/coding/Moodivity";
import SudokuSolver from "../content/portfolio/subcards/coding/SudokuSolver";
import BlackJack from "../content/portfolio/subcards/coding/BlackJack";
import Pathfinding from "../content/portfolio/subcards/coding/Pathfinding";
import DSS from "../content/portfolio/subcards/coding/DSS";

import LiteratureFair from "../content/portfolio/subcards/communication/LiteratureFair";
import Industry4 from "../content/portfolio/subcards/communication/Industry4";

// BLOG
import CreatingThisWebsite from "../content/blog/subcards/CreatingThisWebsite";
import FirstWorkTerm from "../content/blog/subcards/FirstWorkTerm";

// DETERMINES WHICH SUBCARD SHOULD BE RENDERED TO/VISIBLE ON THE SCREEN
function RenderSubcards(props) {
	const backToPortfolio = navbarCategories.portfolio.path;
	const backToBlog = navbarCategories.blog.path;

	return (
		<div>
			<div className="portfolio-subcards">
				{/* CODING PROJECTS */}
				<CreateSubcards
					isActive={props.troyZada}
					backTo={backToPortfolio}
					content={<TroyZada />}
				/>
				<CreateSubcards
					isActive={props.moodivity}
					backTo={backToPortfolio}
					content={<Moodivity />}
				/>
				<CreateSubcards
					isActive={props.sudokuSolver}
					backTo={backToPortfolio}
					content={<SudokuSolver />}
				/>
				<CreateSubcards
					isActive={props.blackJack}
					backTo={backToPortfolio}
					content={<BlackJack />}
				/>
				<CreateSubcards
					isActive={props.pathfinding}
					backTo={backToPortfolio}
					content={<Pathfinding />}
				/>
				<CreateSubcards
					isActive={props.dss}
					backTo={backToPortfolio}
					content={<DSS />}
				/>

				{/* COMMUNICATION PROJECTS */}
				<CreateSubcards
					isActive={props.literatureFair}
					backTo={backToPortfolio}
					content={<LiteratureFair />}
				/>
				<CreateSubcards
					isActive={props.industry4}
					backTo={backToPortfolio}
					content={<Industry4 />}
				/>
			</div>

			<div className="blog-subcards">
				<CreateSubcards
					isActive={props.creatingThisWebsite}
					backTo={backToBlog}
					content={<CreatingThisWebsite />}
				/>
				<CreateSubcards
					isActive={props.firstWorkTerm}
					backTo={backToBlog}
					content={<FirstWorkTerm />}
				/>
			</div>
		</div>
	);
}

export default RenderSubcards;
