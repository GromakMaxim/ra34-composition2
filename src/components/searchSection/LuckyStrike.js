import React from "react";

export default function LuckyStrike(props) {


    return (
        <div className='wrapper'>
            Найдётся всё. Например <a href={props.link}>{props.tryThis}</a>
        </div>
    )
}
