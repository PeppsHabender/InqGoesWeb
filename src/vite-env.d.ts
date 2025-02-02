declare module "virtual:media" {
    const images: string[];
    export default images;
}

declare module "*.css" {
    const content: Record<string, string>;
    export default content;
}

declare module "@/assets/*" {
    const value: string;
    export default value;
}

declare module "@/assets/agents/*" {
    const value: string;
    export default value;
}