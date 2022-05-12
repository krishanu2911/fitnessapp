import React from 'react'
import style from "./VideoCard.module.css"
function Tags({tagName}) {
    return (
        <div className={`${style.tag}`}>
            {tagName}
        </div>
    )
}
export default Tags;