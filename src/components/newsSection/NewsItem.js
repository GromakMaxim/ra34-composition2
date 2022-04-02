import React from "react";

export default function NewsItem(props) {
    return (
        <div className='news_item flex-row'>
            {props.children}
            <a href={props.link}>{props.title}</a>
        </div>
    );
}
