import React from "react";

export default function NewsItem(props) {
    return (
        <div className='news_item flex-row'>
            <img className='news_pic' src={props.pic} alt='idn what to type here'/>
            <div className='news_title'>{props.title}</div>
        </div>
    );
}
