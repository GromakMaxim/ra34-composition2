import NewsItem from "./NewsItem";
import React from "react";
import icon1 from '../../pics/news_icon1.png';
import icon2 from '../../pics/news_icon2.png';
import icon3 from '../../pics/news_icon3.png';
import icon4 from '../../pics/news_icon4.png';

export default function News(props) {
    return (
        <div className='news_list'>
            <NewsItem
                link='www.ya.ru'
                title="Путин упростил получение автомобильных номеров"
            >
                <img className='news_icon' src={icon1} alt='smth'/>
            </NewsItem>

            <NewsItem
                link='www.ya.ru'
                title="В команде Зеленского раскрыли план реформ на Украине"
            >
                <img className='news_icon' src={icon1} alt='smth'/>
            </NewsItem>

            <NewsItem
                link='www.ya.ru'
                title="'Турпомощь' прокомментировала гибель десятков россиян в Анталье"
            >
                <img className='news_icon' src={icon2} alt='smth'/>
            </NewsItem>

            <NewsItem
                link='www.ya.ru'
                title="Суд закрыл дело Демпартии США против России"
            >
                <img className='news_icon' src={icon3} alt='smth'/>
            </NewsItem>

            <NewsItem
                link='www.ya.ru'
                title="На Украине призвали создать ракеты для удара по Москве"
            >
                <img className='news_icon' src={icon4} alt='smth'/>
            </NewsItem>
        </div>

    );
}
