import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Header from '../src/component/Header';
import FormBlock from '../src/component/FormBlock';
import InfoBlock from "./component/InfoBlock";
import SponsorBlock from "./component/SponsorBlock";
import BuyBlock from "./component/BuyBlock";
import Footer from "./component/Footer";

// icon nav
import youtube from '../src/img/youtube logo.svg'
import vk from '../src/img/vk logo.svg'
import facebook from '../src/img/facebook-rect logo.svg'
import x from '../src/img/twitter-square logo.svg'
import twitch from '../src/img/twitch logo.svg'
import instagram from '../src/img/instagram-square logo.svg'
import line1 from '../src/img/22 1.svg';
import line2 from '../src/img/22 2.svg';




function App() {

  const links = [
    { url: 'https://www.youtube.com/watch?v=8X2kIfS6fb8&pp=ygUWY3liZXJwdW5rIDIwNzcgdHJhaW5lcg%3D%3D', imgSrc: youtube, alt: 'YouTube Logo' },
    { url: 'https://vk.com/cyberpunkgame', imgSrc: vk, alt: 'vk Logo' },
    { url: 'https://www.facebook.com/groups/Cyberpunk2077/', imgSrc: facebook, alt: 'facebook Logo' },
    { url: 'https://x.com/CyberpunkGame?mx=2', imgSrc: x, alt: 'x Logo' },
    { url: 'https://www.twitch.tv/directory/category/cyberpunk-2077', imgSrc: twitch, alt: 'twitch Logo' },
    { url: 'https://www.instagram.com/cyberpunkgame/?hl=en', imgSrc: instagram, alt: 'instagram Logo' },
  ];

  return (
    <div className="">
      <Nav links={links} />
      <Header/>
      <InfoBlock
        title="Найт-Сити изменит тебя навсегда!"
        description="приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает."
        gameName="Cyberpunk 2077"
      />
      <img className="w-full h-16 object-cover" src={line1} alt="" />
      <FormBlock
        headerText="Играй и выигрывай!"
        descriptionText={
          <>
            Играй в <span className="text-sky-500 font-bold">Cyberpunk 2077</span> и получи возможность выиграть консоль <span className="text-sky-500 font-bold">Xbox Series X</span> или <span className="text-sky-500 font-bold">Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)
          </>
        }
      />
      <img className="w-full h-16 object-cover" src={line2} alt="" />
      <SponsorBlock 
        title="Полное погружение вместе с HP"
        description="Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!"
      />
      <BuyBlock 
        title="Купить игру Cyberpunk 2077"
      />
      <Footer/>
    </div>
  );
}

export default App;
