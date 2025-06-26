"use client";

import React, { useState } from 'react';
import { GithubOutlined, LinkOutlined, SearchOutlined } from '@ant-design/icons';
import Image, { StaticImageData } from 'next/image';

// Import local images
import EcommerceImage from '@/public/images/ecommerce.jpg';
import PortfolioImage from '@/public/images/portfolio.jpg';
import TaskAppImage from '@/public/images/taskapp.jpg';
import RestaurantImage from '@/public/images/restaurant.jpg';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    category: string;
    github: string;
    live: string;
    image: StaticImageData | string; // Now properly typed
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-featured online store with payment integration and admin dashboard",
        tags: ["React", "Node.js", "MongoDB"],
        category: "Web Application",
        github: "#",
        live: "#",
        image: EcommerceImage
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "Modern responsive portfolio with dark/light mode",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        category: "Website",
        github: "#",
        live: "#",
        image: PortfolioImage
    },
    {
        id: 3,
        title: "Task Management App",
        description: "Productivity application with real-time collaboration",
        tags: ["React", "Firebase", "Redux"],
        category: "Mobile App",
        github: "#",
        live: "#",
        image: TaskAppImage
    },
    {
        id: 4,
        title: "Restaurant Booking System",
        description: "Online reservation platform for restaurants",
        tags: ["Vue.js", "Laravel", "MySQL"],
        category: "Web Application",
        github: "#",
        live: "#",
        image: RestaurantImage
    },
];

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTag, setSelectedTag] = useState('All');

    // Get unique categories and tags
    const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
    const tags = ["All", ...Array.from(new Set(projectsData.flatMap(p => p.tags)))];

    // Filter projects
    const filteredProjects = projectsData.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);

        return matchesSearch && matchesCategory && matchesTag;
    });

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedCategory('All');
        setSelectedTag('All');
    };

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        My Projects
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Browse through my collection of work. Each project represents a unique challenge and solution.
                    </p>
                </header>

                {/* Filters */}
                <div className="mb-12 space-y-4">
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchOutlined className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <select
                            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        <select
                            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                        >
                            {tags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>

                        <button
                            onClick={resetFilters}
                            className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        placeholder="blur"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <GithubOutlined className="mr-1" /> Code
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <LinkOutlined className="mr-1" /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                            No projects found matching your filters.
                        </p>
                        <button
                            onClick={resetFilters}
                            className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            Show All Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}