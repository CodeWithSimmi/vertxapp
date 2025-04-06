import React from "react";
import "./Slider.css";
import { folder, arrow, wheel } from "../../assets/index";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, File, Folder, LayoutDashboard, MessageCircle, Shield } from "lucide-react";

const Sidebar = () => {

  const sidebarOptions: any[] = [
    {
      text: "Dashboard",
      link: "/dashboard",
      icon: LayoutDashboard
    },
    {
      text: "Documents",
      link: "/documents",
      icon: File
    },
    {
      text: "Chat",
      link: "/chat",
      icon: MessageCircle
    },
  ]

  const renderSidebarOption = (item: any, index: number) => {
    const {icon} = item;
    const Icon = icon;
    return (
      <Link href={item.link} key={index} className="custom-link">
        <div className="custom-link-area">
          <Icon />
          <span className="custom-link-text">{item.text}</span>
        </div>
        <ChevronRight />
      </Link>
    )
  }

  return (
    <div className={`sidebar`} >
      <div className="sidebar-menu">{sidebarOptions.map(renderSidebarOption)}</div>
    </div>
  );
};

export default Sidebar;
