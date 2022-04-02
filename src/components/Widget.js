import News from "./newsSection/News";
import React from "react";
import Exchange from "./exchangeSection/Exchange";
import SearchSection from "./searchSection/SearchSection";
import AdvBanner from "./bannerSection/AdvBanner";
import '../css/main.css';
import '../css/utils.css';
import BottomSection from "./bottomSection/BottomSection";
import '../css/defaults.css';

export default function Widget(props) {
    return (
        <div className='widget flex-col'>
            <News/>
            <Exchange/>
            <SearchSection/>
            <AdvBanner link='https://www.kinopoisk.ru/film/1044450/'/>
            <BottomSection/>
        </div>
    );

}
