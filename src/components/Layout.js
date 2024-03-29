import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar";
import {FiGithub, FiYoutube} from "react-icons/fi";

function Layout({ children }) {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      <div className="w-full overflow-x-hidden relative">{children}</div>

      <footer className="font-roboto-mono tracking-wide text-blue-gray text-sm text-center m-4 mx-6 ">
        <div className="flex flex-col gap-2 items-center">
            <a href="https://github.com/Jk4818/JKeung-2022-V2" target="_blank" rel="noreferrer" className="hover:text-vibrant-orange transition-all">
                <p>Designed & Developed with ❤️ by {data.site.siteMetadata.author} {new Date().getFullYear().toString()}</p>
            </a>
            <span className="flex gap-5">
                <a href="https://github.com/Jk4818/" target="_blank" rel="noreferrer" className="hover:text-vibrant-orange transition-all">
                    <FiGithub size="20"/>
                </a>
                <a href="https://www.youtube.com/channel/UCP5JJh8VukJMU1jd0BUhjgQ" target="_blank" rel="noreferrer" className="hover:text-vibrant-orange transition-all">
                    <FiYoutube size="20" />
                </a>
            </span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
