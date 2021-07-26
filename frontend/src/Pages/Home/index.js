import React, { useState, useEffect } from 'react';
import Header from '../../Components/GlobalComponents/header';
import SearchUser from '../../Components/Home/searchUser';

export default function Home() {

    const [headerColor, setHeaderColor] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setHeaderColor(true);
            } else {
                setHeaderColor(false)
            }
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

    }, []);


    return (
        <>
            <Header changeColor={headerColor} />
            <SearchUser />
        </>
    )
}