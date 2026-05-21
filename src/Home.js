import React from "react";
import { useParams } from "react-router-dom";

import Blog from "./Blog";
import SocialLinks from "./SocialLinks";

const Home = () => {
    const { url } = useParams();

    return (
        <>
            {!url &&
            <section className="home">
                <p>Well hello there!</p>

                <p>I'm Jon, a <strong>Senior Software Engineer</strong> from Bournemouth. I build, maintain and improve web platforms, with a particular focus on <strong>Laravel</strong>, <strong>PHP</strong>, <strong>React</strong>, <strong>MySQL</strong> and the infrastructure behind them.</p>

                <p>My experience covers the whole stack: backend systems, frontend applications, APIs, databases, deployments, server management, performance, and long-term technical maintainability.</p>

                <p>I’ve worked on digital products for companies including <strong>BMW</strong>, <strong>Stellantis</strong>, <strong>Volkswagen</strong> and <strong>Porsche</strong>, alongside projects for independent retailers, local councils and smaller organisations with big ideas.</p>

                <p>I’m at my best when turning complex requirements into reliable, understandable systems that people can actually use, maintain and build upon.</p>

                <p>If that sounds like the sort of help your project needs, I’m all ears.</p>
                <SocialLinks />
            </section>}

            <section className="blog" id="blog">
                <Blog />
            </section>
        </>
    );
}

export default Home;
