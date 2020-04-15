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
                <p>Well hello there, I'm Jon, a <strong>full-stack web developer</strong> from Bournemouth, pleased to meet you!</p>
                <p>I'm usually found deep in <strong>Laravel</strong> and/or <strong>React</strong> code, but I'm also skilled in all other areas of the tech stack from server and database management to backend and frontend code.</p>
                <p>I've helped many companies, from multi-national corporations such as <strong>Volvo</strong>, <strong>Peugeot Citroën Automobiles</strong> and <strong>Volkswagen</strong>, a multitude of <strong>independent retailers</strong> and <strong>local councils</strong> to achieve their digital aspirations.</p>
                <p>If you could do with someone like to me help you with a web project, large or small, I'm all ears!</p>

                <SocialLinks />
            </section>}

            <section className="blog" id="blog">
                <Blog />
            </section>
        </>
    );
}

export default Home;
