import NewsItem from "./NewsItem";
import React from "react";

export default function News(props) {
    return (
        <div className='news_list'>
            <NewsItem
                link='www.ya.ru'
                pic="https://via.placeholder.com/200"
                title="Путин упростил получение автомобильных номеров"
            />

            <NewsItem
                link='www.ya.ru'
                pic="https://via.placeholder.com/200"
                title="В команде Зеленского раскрыли план реформ на Украине"
            />

            <NewsItem
                link='www.ya.ru'
                pic="https://via.placeholder.com/200"
                title="'Турпомощь' прокомментировала гибель десятков россиян в Анталье"
            />

            <NewsItem
                link='www.ya.ru'
                pic="https://via.placeholder.com/200"
                title="Суд закрыл дело Демпартии США против России"
            />

            <NewsItem
                link='www.ya.ru'
                pic="https://via.placeholder.com/200"
                title="На Украине призвали создать ракеты для удара по Москве"
            />
        </div>

    );
}
