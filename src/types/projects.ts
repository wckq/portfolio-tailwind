// Importa el icono de Java
import Java from "@/components/icons/Java.astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

// Define un tipo para los lenguajes
type Language = "JAVA";

// Define la interfaz Raw para los lenguajes y tecnologías
interface Raw {
    name: string;
    description: string;
    logo: AstroComponentFactory;
}

export const LANGUAGES: Record<Language, Raw> = {
    JAVA: {
        name: "Java",
        description: "A versatile programming language.",
        logo: Java,
    },
};

export const TECHNOLOGIES: Record<string, Raw> = {
    java: {
        name: "Java",
        description: "A versatile programming language.",
        logo: Java,
    },
};

// Define la interfaz Projects
export interface Projects {
    name: string;
    description: string;
    image: string;
    repository: string;
    technologies: Array<Raw>; 
    languages: Array<Raw>; 
}
