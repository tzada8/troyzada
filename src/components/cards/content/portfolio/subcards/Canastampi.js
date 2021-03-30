import React from "react";
import ProjectPost from "../project_post/ProjectPost";
import { portfolioData } from "../PortfolioData";
import "./ProjectContent.css";

function Canastampi() {
   return (
      <div>
         <ProjectPost
            projectTitle={portfolioData.canastampi.title}
            src={portfolioData.canastampi.image}
            date={portfolioData.canastampi.date}
            github={portfolioData.canastampi.github}
         />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste?
            Dolore, dolorum? Id totam nobis deleniti repellendus aliquid illo
            eligendi asperiores. Praesentium deserunt temporibus expedita hic
            vitae perspiciatis tempore corporis similique aspernatur! Impedit
            enim excepturi delectus itaque odio deleniti odit, provident
            accusamus distinctio voluptas mollitia culpa ullam sapiente soluta!
            Dolores labore suscipit eius placeat consequatur inventore
            repellendus maxime asperiores eaque reprehenderit, vitae
            voluptatibus adipisci hic sunt quo doloribus sapiente eum iure dicta
            ex fuga! Non animi impedit molestiae quisquam tempora ad, quam ut
            labore exercitationem excepturi placeat reiciendis dignissimos
            necessitatibus corrupti, odit fugit corporis ducimus explicabo quas
            voluptate atque perspiciatis.
         </p>
      </div>
   );
}

export default Canastampi;
