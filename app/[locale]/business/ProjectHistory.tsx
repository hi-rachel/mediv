import { useState } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Project {
  title: string;
  year: string;
  tag: string[];
  description: string;
  department: string;
  img: string;
}

const ProjectHistory = () => {
  const t = useTranslations("Projects");
  const projects = t.raw("list") as Project[];
  const [selectedTag, setSelectedTag] = useState("ALL");
  const tags = ["ALL", ...new Set(projects.flatMap((project) => project.tag))];

  const filteredProjects =
    selectedTag === "ALL"
      ? projects
      : projects.filter((project) => project.tag.includes(selectedTag));

  return (
    <div>
      <TabGroup>
        <TabList className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <Tab
              key={tag}
              className={({ selected }) =>
                `rounded-full py-2 px-4 text-sm font-medium leading-5 focus:outline-none transition-colors duration-200
                ${
                  selected
                    ? "bg-info text-white"
                    : "bg-white text-primary hover:bg-blue-100"
                }`
              }
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Tab>
          ))}
        </TabList>
      </TabGroup>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-primary-light/20"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow p-4">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-green-100 text-green-800 font-semibold text-xs px-2 py-1 rounded-full mb-3">
                    {project.year}
                  </span>
                  <p className="leading-relaxed text-gray-500 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tag.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative flex-shrink-0">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 font-medium leading-tight max-w-[calc(100%-3rem)]">
                      {project.department}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            선택된 태그에 맞는 프로젝트가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectHistory;
