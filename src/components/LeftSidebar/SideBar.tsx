import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/Button";
import { SIDEBAR } from "../../consts";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";

type SidebarNavProps = {
    currentPage: string;
};

const SidebarNav: React.FC<SidebarNavProps> = ({ currentPage }) => {
    const currentPageMatch = currentPage.endsWith("/")
        ? currentPage.slice(1, -1)
        : currentPage.slice(1);

    const sidebar = SIDEBAR["es"];

    const initialOpenSections = Object.keys(sidebar).reduce(
        (acc, header) => ({ ...acc, [header]: true }),
        {}
    );

    const [openSections, setOpenSections] = useState<Record<string, boolean>>(initialOpenSections);
    const activeItemRef = useRef<HTMLLIElement | null>(null); // Referencia para el elemento activo

    useEffect(() => {
        // Desplazar el contenedor hacia el elemento activo cuando el componente se carga o cambia la página
        if (activeItemRef.current) {
            activeItemRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [currentPage]);

    const handleToggleSection = (header: string) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [header]: !prevState[header],
        }));
    };

    return (
        <nav className="">
            <ul className="w-full">
                {Object.entries(sidebar).map(([header, children]) => {
                    const isSectionOpen = openSections[header] || false;

                    return (
                        <li key={header} className="w-full">
                            <div className="w-full">
                                {/* Botón del Header */}
                                <Button
                                    variant="ghost"
                                    className="w-full  justify-between font-bold text-base text-blue-500 hover:text-blue-500 text-wrap text-start h-auto whitespace-nowrap"
                                    onClick={() => handleToggleSection(header)}
                                >
                                    {header}
                                    {/* Ícono que rota según el estado */}
                                    <CaretDownIcon
                                        className={`ml-2 transform transition-transform duration-300 ${isSectionOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </Button>

                                {/* Contenido del header que se muestra/oculta */}
                                {isSectionOpen && (
                                    <ul className="w-full flex flex-col gap-2">
                                        {children.map((child: { link: string; text: string }) => {
                                            const url = child.link;
                                            const isActive = `/${currentPageMatch}` === child.link;

                                            return (
                                                <li
                                                    ref={isActive ? activeItemRef : null}
                                                    key={child.link}
                                                    className="w-full">
                                                    <a href={url} aria-current={isActive ? "page" : undefined}>
                                                        <Button
                                                            className="w-full justify-start text-wrap text-start h-auto whitespace-nowrap"
                                                            variant={isActive ? "default" : "ghost"}
                                                        >
                                                            {child.text}
                                                        </Button>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                            <Separator className="my-2" />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SidebarNav;
