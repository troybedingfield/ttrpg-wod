'use client'

import { useEffect, useRef, useState } from "react";
import './DropDownMenu.scss'

export default function DropDownMenu({ ...props }) {

    const { children, dropdownItems, menuClick } = props

    const [isOpen, setIsOpen] = useState(false);

    const [dropdownValue, setDropdownValue] = useState(dropdownItems[0]);

    // console.log(dropdownValue);

    const dropdown = useRef<any | undefined>();

    // useOutsideClick(dropdown);

    function splitOpen() {
        setIsOpen(isOpen => !isOpen);

    }

    function handleDropdownClick(item: any) {
        // console.log(item)
        setDropdownValue(item);
        splitOpen();
    }

    /**
 * Hook that alerts clicks outside of the passed ref
 */
    // function useOutsideClick(ref: any) {

    //     useEffect(() => {
    //         function handleClickOutside(event: any) {
    //             if (ref.current && !ref.current.contains(event.target)) {
    //                 splitOpen();
    //             }
    //         }

    //         if (ref) {
    //             // Bind the event listener
    //             document.addEventListener("mousedown", handleClickOutside);
    //             return () => {
    //                 // Unbind the event listener on clean up
    //                 document.removeEventListener("mousedown", handleClickOutside);
    //             };
    //         }
    //     }, [ref])

    // }


    const handleMouseEnter = () => {
        setIsOpen(isOpen => !isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className="dropmenu-container">
            <div className="dropdown" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="menuParent"
                //  onClick={splitOpen}
                >{children} </div>
                {!isOpen ? null : (<div className="dropdown-content" ref={dropdown}>
                    {/* <a >
                    
                    </a> */}

                    {dropdownItems.map((item: any, index: number) => {
                        return (<a className="menuItem" key={index} onClick={() => menuClick(item)}>{item}</a>)
                    })}



                </div>)}
            </div>
        </div>
    )

    // const { children, } = props;

    // const [isDropdownVisible, setDropdownVisible] = useState(false);

    // const handleMouseEnter = () => {
    //     setDropdownVisible(true);
    // };

    // const handleMouseLeave = () => {
    //     setDropdownVisible(false);
    // };

    // return (
    //     <>

    //         <div>
    //             <div className="menuParent relative" onMouseEnter={handleMouseEnter}
    //                 onMouseLeave={handleMouseLeave}>
    //                 {children}
    //                 {isDropdownVisible && <div className="dropdown-menu text-nowrap absolute overflow-visible">
    //                     <ul>
    //                         <li>Menu 1</li>
    //                         <li>Menu 2</li>
    //                         <li>Menu 3</li>
    //                     </ul>
    //                 </div>}
    //             </div>

    //         </div>
    //     </>
    // )
}