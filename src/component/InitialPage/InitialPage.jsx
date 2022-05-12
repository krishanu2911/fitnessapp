import React from 'react'
import style from "./InitialPage.module.css"
function InitialPage() {
    return (
        <div className={`${style.mainDiv}`}>
            <h2 className={`${style.headerText}`}>Search My Fitness video here 👆🏻</h2>
            <img className={`${style.heroImg}`} src="https://res.cloudinary.com/krishanucloud/image/upload/v1652347745/heroImage_krgc0w.png" alt="" srcset="" />
        </div>
    )
}
export default InitialPage;