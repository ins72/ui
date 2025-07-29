"use client";

import { useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/style-reference/components/Icon";

type MenuProps = {
    className?: string;
    profileInformationTo: string;
    items: Array<{
        title: string;
        icon: string;
        description: string;
        to: string;
    }>;
};

const Menu = ({ className, profileInformationTo, items }: MenuProps) => {
    return (
        <div className={`w-30rem pr-3 max-3xl:w-25rem max-2xl:w-18.5rem max-lg:w-full max-lg:pr-0 max-lg:mb-8 ${className || ""}`}>
            <div className="bg-b-surface2 border border-s-stroke2 rounded-3xl p-6 max-lg:p-4">
                {/* Profile Information Section */}
                <Link 
                    href={`#${profileInformationTo}`}
                    className="flex items-center p-4 rounded-xl hover:bg-b-surface1 transition-colors"
                >
                    <div className="relative mr-4">
                        <Image
                            className="w-12 h-12 rounded-full object-cover"
                            src="/images/avatars/avatar-1.jpg"
                            width={48}
                            height={48}
                            alt="Profile"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <div className="text-t-primary font-medium">Profile Information</div>
                        <div className="text-t-secondary text-sm">Manage your profile details</div>
                    </div>
                </Link>

                {/* Navigation Items */}
                <div className="mt-6 space-y-2">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={`#${item.to}`}
                            className="flex items-center p-4 rounded-xl hover:bg-b-surface1 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-b-surface1 group-hover:bg-primary-01 rounded-full flex items-center justify-center mr-4 transition-colors">
                                <Icon 
                                    name={item.icon} 
                                    className="w-5 h-5 text-t-secondary group-hover:text-white transition-colors" 
                                />
                            </div>
                            <div className="flex-1">
                                <div className="text-t-primary font-medium">{item.title}</div>
                                <div className="text-t-secondary text-sm">{item.description}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;