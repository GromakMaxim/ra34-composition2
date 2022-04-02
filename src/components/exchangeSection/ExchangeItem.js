import React from "react";

export default function ExchangeItem(props) {
    return (
        <div className='exchange_item flex-row'>
            <div className='exchange_item_cur1'>{props.cur1}</div>
            <div className='exchange_item_cur2'>{props.cur2}</div>
            <div className='exchange_item_val'>{props.val}</div>
            <div className='exchange_item_dyn'>{props.dyn}</div>
        </div>
    );
}
