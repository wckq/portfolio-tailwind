import AmazonAWS from "@/components/icons/technologies/AmazonAWS.astro";
import AstroLogo from "@/components/icons/technologies/AstroLogo.astro";
import CSS from "@/components/icons/technologies/CSS.astro";
import Express from "@/components/icons/technologies/Express.astro";
import HTML from "@/components/icons/technologies/HTML.astro";
import Java from "@/components/icons/technologies/Java.astro";
import JavaScript from "@/components/icons/technologies/JavaScript.astro";
import MongoDB from "@/components/icons/technologies/MongoDB.astro";
import NodeJS from "@/components/icons/technologies/NodeJS.astro";
import PostgreSQL from "@/components/icons/technologies/PostgreSQL.astro";
import React from "@/components/icons/technologies/React.astro";
import Redis from "@/components/icons/technologies/Redis.astro";
import SpringBoot from "@/components/icons/technologies/SpringBoot.astro";
import Typescript from "@/components/icons/technologies/Typescript.astro";

import type { AstroComponentFactory } from "astro/runtime/server/index.js";

type Language = "HTML" | "CSS" | "JAVASCRIPT" | "JAVA" | "TYPESCRIPT"
type Technologies = "REDIS" | "ASTRO" | "REACT" | "EXPRESS" | "SPRING_BOOT" | "NODE_JS" | "POSTGRESQL" | "MONGO_DB" | "AMAZON_AWS"

export interface Raw {
    name: string;
    logo: AstroComponentFactory;
}

export const TECHNOLOGIES: Record<Language | Technologies, Raw> = {
    JAVA: {
        name: "Java",
        logo: Java,
    },
    REDIS: {
        name: "Redis",
        logo: Redis
    },
    TYPESCRIPT: {
        name: "Typescript",
        logo: Typescript
    },
    MONGO_DB: {
        name: "MongoDB",
        logo: MongoDB
    },
    HTML: {
        name: "HTML",
        logo: HTML
    },
    CSS: {
        name: "CSS",
        logo: CSS
    },
    AMAZON_AWS: {
        name: "Amazon AWS",
        logo: AmazonAWS
    },
    ASTRO: {
        name: "Astro",
        logo: AstroLogo
    },
    EXPRESS: {
        name: "Express",
        logo: Express
    },
    JAVASCRIPT: {
        name: "JavaScript",
        logo: JavaScript
    },
    NODE_JS: {
        name: "NodeJS",
        logo: NodeJS
    },
    POSTGRESQL: {
        name: "PostgreSQL",
        logo: PostgreSQL
    },
    REACT: {
        name: "React",
        logo: React
    },
    SPRING_BOOT: {
        name: "Spring Boot",
        logo: SpringBoot
    }
};


export interface Projects {
    name: string;
    description: string;
    image: string;
    repository: string;
    technologies: Array<Raw>; 
}
