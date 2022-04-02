import React from "react";

export default function Block(props) {

    let pic = null;
    if (props.pic !== null && props.pic !== undefined) {
        pic = <img className='block_header_pic' src={props.pic}/>
    }

    return (
        <div className='bottom_block'>
            <div className='block_header flex-row'>
                <h3>{props.title}</h3>
                {pic}
            </div>
            {props.children}
        </div>
    )
}
