import React from "react";
import BlogPost from "../blog_post/BlogPost";
import { blogData } from "../../../../../data/BlogData";
import Subheading from "../../extra_components/paragraph/Subheading";
import Paragraph from "../../extra_components/paragraph/Paragraph";

function CreatingThisWebsite() {
	return (
		<div>
			<BlogPost
				src={blogData.creatingThisWebsite.image}
				blogTitle={blogData.creatingThisWebsite.title}
				date={blogData.creatingThisWebsite.date}
			/>

			<Paragraph
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            blanditiis error dolore quam dignissimos quia, architecto corporis
            ipsum, distinctio, quasi magni suscipit vitae fugiat? Excepturi
            reiciendis nulla voluptates consequatur voluptate id repudiandae
            placeat porro qui? Atque ipsam est eius necessitatibus eos corrupti
            doloremque exercitationem et maxime id, nesciunt magnam delectus."
			/>

			<Subheading subheading="This is my next paragraph" />
			<Paragraph
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ea corporis esse ipsam minima, sapiente exercitationem numquam vitae
            officia itaque quidem culpa, odit deserunt, consectetur nam a amet
            dicta porro fuga eaque voluptatum ad placeat sint. Non distinctio
            aliquid itaque, consectetur vero excepturi, ipsam enim animi
            consequatur quos doloremque laboriosam?"
			/>
		</div>
	);
}

export default CreatingThisWebsite;
