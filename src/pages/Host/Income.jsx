import React from "react"
import {Outlet} from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <h1>Income page goes here</h1>
            <Outlet />
        </>
    )
}