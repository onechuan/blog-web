import { SVG_SPRITE } from "@/config/constants";

export interface INavItem {
    to: string;
    link: string;
    title: string;
}

export const navMap: INavItem[] = [
    {
        to:"/",
        link:SVG_SPRITE.home,
        title:"Home"
    },
    {
        to:"/blog",
        link:SVG_SPRITE.blog,
        title:"Blog"
    },
    {   
        to:"/archive",
        link:SVG_SPRITE.archive,
        title:"Archive"
    },
    {
        to:"/music",
        link:SVG_SPRITE.music,
        title:"Music"
    },
    {
        to:"/about",
        link:SVG_SPRITE.cv,
        title:"About"
    }
]