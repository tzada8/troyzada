import React from "react";
import ComProjectPost from "../../project_post/communication/ComProjectPost";
import { portfolioData } from "../../../../../../data/PortfolioData";
import Subheading from "../../../extra_components/paragraph/Subheading";
import Paragraph from "../../../extra_components/paragraph/Paragraph";

function Industry4() {
	const industry4 = portfolioData.communication.industry4;
	return (
		<div>
			<ComProjectPost
				projectTitle={industry4.title}
				src={industry4.image}
				date={industry4.date}
			/>
			<Subheading subheading="About the Application" />
			<Paragraph content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam reiciendis, optio adipisci molestiae quo, quam atque eaque distinctio tempore aspernatur culpa voluptate voluptatum repellendus facilis nesciunt doloremque modi cupiditate?" />
		</div>
	);
}

export default Industry4;
