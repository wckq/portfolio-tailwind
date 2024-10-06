import AmazonAWS from "@/components/icons/AmazonAWS.astro";
import AstroLogo from "@/components/icons/AstroLogo.astro";
import CSS from "@/components/icons/CSS.astro";
import Express from "@/components/icons/Express.astro";
import HTML from "@/components/icons/HTML.astro";
import Java from "@/components/icons/Java.astro";
import JavaScript from "@/components/icons/JavaScript.astro";
import MongoDB from "@/components/icons/MongoDB.astro";
import NodeJS from "@/components/icons/NodeJS.astro";
import PostgreSQL from "@/components/icons/PostgreSQL.astro";
import React from "@/components/icons/React.astro";
import Redis from "@/components/icons/Redis.astro";
import SpringBoot from "@/components/icons/SpringBoot.astro";
import Typescript from "@/components/icons/Typescript.astro";

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
