import React from 'react'
import MainNavigation from './MainNavigation'
import "./layout.css"


export default function Layout(props) {

return (
    <div>
        <MainNavigation />
        <main className="main">
            {props.children}
        </main>
    </div>
)

}