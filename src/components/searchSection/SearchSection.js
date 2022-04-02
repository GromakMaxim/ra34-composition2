import React from "react";
import LuckyStrike from "./LuckyStrike";

export default function SearchSection(props) {
    return (
        <div>
            <div className='fast_funcs'>
                <a href='https://yandex.ru/video/' className='ss_link'>Видео</a>
                <a href='https://yandex.ru/images/' className='ss_link'>Картинки</a>
                <a href='https://yandex.ru/news/' className='ss_link'>Новости</a>
                <a href='https://yandex.ru/maps/' className='ss_link'>Карты</a>
                <a href='https://market.yandex.ru/' className='ss_link'>Маркет</a>
                <a href='https://translate.yandex.ru/' className='ss_link'>Переводчик</a>
                <a href='https://zen.yandex.ru/' className='ss_link'>Эфир</a>
                <a href='www.ya.ru' className='ss_link'>ещё</a>
            </div>

            <div className='wrapper flex-row pos-rel'>
                <div className='search_field '>
                    <input type='search'/>
                </div>
                <button className='pos-abs' role='button' type='submit'>
                    <span className="button__text">Найти</span>
                </button>
            </div>

            <LuckyStrike tryThis='фаза луны сегодня' link='https://my-calend.ru/moon-phase'/>

        </div>
    );
}
