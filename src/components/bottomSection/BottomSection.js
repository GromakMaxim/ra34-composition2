import React from "react";
import Column from "./Column";
import Block from "./Block";
import weatherPic from '../../pics/weather.JPG';
import efirPic from '../../pics/efir.JPG';
import playIconLi from '../../pics/play.png';

export default function BottomSection(props) {
    return (
        <div className='columns flex-row'>
            <Column name='one'>

                <Block title='Погода'>
                    <div className='wrapper flex-row'>
                        <img className='weather_pic' src={weatherPic}/>
                        <div className='weather_temperature_big'>+17°</div>
                        <div className='temperature_wrapper flex-col'>
                            <div className='temp_morning'>Утром +17°</div>
                            <div className='temp_day'>днём +20°</div>
                        </div>
                    </div>
                </Block>


                <Block title='Посещаемое'>
                    <ul className='visit'>
                        <li>
                            <a href='#'><span>Недвижимость</span> - о сталинках</a>
                        </li>
                        <li>
                            <a href='#'><span>Маркет</span> - люстры и светильники</a>
                        </li>
                        <li>
                            <a href='#'><span>Авто.ру</span> - привод 4х4 до 500000</a>
                        </li>
                    </ul>
                </Block>
            </Column>
            <Column name='two'>
                <Block title='Карта Германии'>
                    <ul>
                        <li><a href='#'>Расписания</a></li>
                    </ul>
                </Block>

                <Block title='Телепрограмма' pic={efirPic}>
                    <ul className='tv'>
                        <li>
                            02:00 <a href='#'>ТНТ.Best ТНТ</a> <span className='grey'>International</span>
                        </li>
                        <li>
                            02:15 <a href='#'>Джинглики</a> <span className='grey'>Карусель INT</span>
                        </li>
                        <li>
                            02:25 <a href='#'>Наедине со всеми</a> <span className='grey'>Первый</span>
                        </li>
                    </ul>
                </Block>

            </Column>
            <Column name='three'>
                <Block title='Эфир'>
                    <ul>
                        <li><img className='playIcon' src={playIconLi} alt='play'/><a href='#'>Управление как
                            искусство</a> <span className='grey'>Успех</span></li>
                        <li><img className='playIcon' src={playIconLi} alt='play'/><a href='#'>Ночь. Мир в это
                            время.</a> <span className='grey'>earthTV</span></li>
                        <li><img className='playIcon' src={playIconLi} alt='play'/><a href='#'>Андрей Возн...</a> <span
                            className='grey'>Совершенно секретно</span></li>
                    </ul>
                </Block>
            </Column>

        </div>

    );
}
