import {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../context/LanguageContext";
import diccionario from "../data/test.json";

export default function Projects() {
  const {language} = useContext(LanguageContext);
  const [jsonData, setData] = useState({});
  const projects = diccionario["projects"];
  const section1 = "section1";

  useEffect(() => {
    setData(diccionario[language]);
  }, [language]);
  console.log(jsonData);
  
  return (
    <div className="flex flex-col w-100 bg-white mx-4 rounded-md shadow-lg shadow-gray-500/65 border border-slate-200 dark:bg-dark-background dark:text-dark-text">
      <h2 className="text-2xl m-4">{jsonData[section1]?.section_titles.project_title}</h2>
      <div className="flex flex-col p-4 md:flex-row md:flex-wrap">
        {
          projects?.map((project) => (
            <div key={project.title} className="flex flex-row w-full my-2 h-50 md:w-1/2 gap-4">
              <div className="w-1/3 lg:w-1/5">
              <img  className="object-cover w-full h-full" src={project.img} alt={project.img} />

              </div>
              <div>
                <h3>{project.title}</h3>
                <div className="flex flex-row gap-4">
                  <div>
                    <a href={project.gitUrl}>
                    <img src="/github.png" />
                    </a>
                  </div>
                  {
                  project.linkUrl !== "" ? 
                    <div>
                      <a href={project.linkUrl}>
                        <img src="/web-link.png" alt="" className="h-10" />
                      </a>
                    </div>
                  :
                  null
                  }

                </div>
              </div>
            </div>
          ))
          }
      </div>
    </div>
  );
}
