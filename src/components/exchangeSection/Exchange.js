import React from "react";
import ExchangeItem from "./ExchangeItem";

export default function Exchange(props) {
    return (
        <div className='exchange flex-row'>
            <ExchangeItem cur1='USD' cur2='MOEX' val='63.52' dyn='+0.09%'/>
            <ExchangeItem cur1='EUR' cur2='MOEX' val='70.86' dyn='+0.14%'/>
            <ExchangeItem cur1='USD' cur2='MOEX' val='64.90' dyn='+1.63%'/>
        </div>
    );
}
