import React from "react";
import Column from "./Column";
import Block from "./Block";
import weatherPic from '../../pics/weather.JPG';
import efirPic from '../../pics/efir.JPG';

export default function BottomSection(props) {
    return(
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
                            <span>Недвижимость</span> - о сталинках
                        </li>
                        <li>
                            <span>Маркет</span> - люстры и светильники
                        </li>
                        <li>
                            <span>Авто.ру</span> - привод 4х4 до 500000</li>
                    </ul>
                </Block>
            </Column>
            <Column name='two'>
                <Block title='Карта Германии'>
                    <a href='' >Расписания</a>
                </Block>

                <Block title='Телепрограмма' pic={efirPic}>
                    <ul className='tv'>
                        <li>
                            02:00 ТНТ.Best ТНТ <span className='grey'>International</span>
                        </li>
                        <li>
                            02:15 Джинглики <span className='grey'>Карусель INT</span>
                        </li>
                        <li>
                            02:25 Наедине со всеми <span className='grey'>Первый</span>
                        </li>
                    </ul>
                </Block>

            </Column>
            <Column name='three'>
                <Block title='Эфир'>
                    <ul >
                        <li>Управление как искусство <span className='grey'>Успех</span></li>
                        <li>Ночь. Мир в это время. <span className='grey'>earthTV</span></li>
                        <li>Андрей Возн... <span className='grey'>Совершенно секретно</span></li>
                    </ul>
                </Block>
            </Column>

        </div>

    );
}
