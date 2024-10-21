import { useState } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/app/data/projects";

const ProjectHistory = () => {
  const [selectedTag, setSelectedTag] = useState("ALL");

  const tags = ["ALL", ...new Set(projects.flatMap((project) => project.tag))];

  const filteredProjects =
    selectedTag === "ALL"
      ? projects
      : projects.filter((project) => project.tag.includes(selectedTag));

  return (
    <div>
      {/* 태그 선택 */}
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

      {/* 프로젝트 목록 */}
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
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black pr-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        objectFit="contain"
                        className="rounded-full"
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium text-center w-20 break-words">
                      {project.department}
                    </span>
                  </div>
                </div>
                <span className="inline-block bg-green-100 text-green-800 font-semibold text-xs px-2 py-1 rounded-full mb-3">
                  {project.year}
                </span>
                <p className="text-neutral-dark mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
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
