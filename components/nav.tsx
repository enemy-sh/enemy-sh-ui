import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Nav() {
    return (
        <div className="flex justify-center items-center p-4 px-5 sm:px-4 text-black absolute w-full top-0 z-50">
            <div className="flex items-center gap-4 sm:w-5/6 w-full justify-between">
                <div className="text-3xl font-normal">
                    <img src="/enemy.sh.svg" alt="enemy.sh" className="h-10" />
                </div>
                <div className="hidden md:flex gap-5">
                    <p>services</p>
                    <p>about</p>
                    <p>contact</p>
                </div>
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu className="h-5 w-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent >
                            <DropdownMenuItem>services</DropdownMenuItem>
                            <DropdownMenuItem>about</DropdownMenuItem>
                            <DropdownMenuItem>contact</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}