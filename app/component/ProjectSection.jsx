"use client"
import React, { useState } from 'react'
import ProductCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const ProjectSection = () => {

    const projectData = [
    {
        id:1,
        title:"React Portfolio Website",
        description:"A react portfolio website created using nextjs and tailwind",
        image:"/images/project/1.png",
        tag:["All","Mobile"],
        gitUrl:"https://github.com/Babydoja/portfoliowebsite",
        previewUrl:"https://portfoliowebsite-eta-orcin.vercel.app/"
    },
    {
        id:2,
        title:"Blog Website",
        description:"A react blog website created using react, nodejs and express",
        image:"/images/project/2.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Babydoja/blog",
        previewUrl:"https://blog-steel-one-91.vercel.app/"
    },
    {
        id:3,
        title:"E - Commerce Website",
        description:"A react blog website created using react and tailwindjs",
        image:"/images/project/3.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"React Firebase Template",
        description:"A react website used for Authetication and Authorization",
        image:"/images/project/4.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Babydoja/authfrontend",
        previewUrl:"https://authfrontend-two.vercel.app/"
    },
    {
        id:5,
        title:"Crud Website",
        description:"A react website created for creating ,updating and deleting task",
        image:"/images/project/5.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Babydoja/crudss",
        previewUrl:"https://crudapps.vercel.app/"
    },
    {
        id:6,
        title:"Training Studio Template",
        description:"A project created using html and css ",
        image:"/images/project/6.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Babydoja/Training-Studio",
        previewUrl:"https://training-studio-eight.vercel.app/"
    },
    ]
    const [tag, setTag] = useState('All')

    const handleTagChange = (newTag) =>{
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project)=>{
        return project.tag.includes(tag);
    })
 

    return (
    <div id='project'>
        <h2 className='text-white text-center font-bold mt4 mb8 md:mb-12 text-4xl'>My Projects</h2>
       

        <div className=' text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick={handleTagChange} name  ="Mobile" isSelected={tag === "Mobile"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {
                filteredProjects.map((project)=>(
                    <ProductCard 
                    key={project.id} 
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image} 
                    tag={project.tag}
                    previewUrl={project.previewUrl}
                    gitUrl={project.gitUrl}
                    />
                    
                ))
            }
        </div>
    </div>
  )
}

export default ProjectSection