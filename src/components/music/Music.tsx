import "./Music.css";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Music = () => {
  const [initialLyrics] = useState([
    `........ es un beso enamorado a la orilla del mar
El llanto emocionado del que vuelve al hogar
Un claro de luz en la oscuridad

........ es amante y compañera para la soledad
Un cielo sin fronteras hasta donde subir
El vuelo fugaz a un tiempo feliz

........ es el punto de partida de una historia de amor
El lazo que nos une y nos hace vibrar
........ es el canto de amor y de paz
Que te despierta el corazón

¿Quién soy?`,
  ]);
  const lyrics = [
    "Birds of a feather",
    "We should stick together",
    "Come up don't leave me",
    "It can't be that easy",
    "Seein' you got ritualistic",
    "Cleansin' my soul of addiction for now",
    "Mr. Blue Sky is living here today!",
    "Over the castle on the hill",
    "I'm gona give you my heart",
    "Cause you're a sky, cause you're a sky full of stars",
    "Cause you light up the path",
    "Hold tight",
    "You got the music in you",
    "Don't let go",
    "You got the music in you",
    "I used to roll the dice",
    "Feel the fear in my enemy's eyes",
    "Oh to see without my eyes",
    "The first time that you kissed me",
    "Boundless by the time I cried",
    "Close your eyes",
    "Clear your heart",
    "Cut the cord",
    "Are we human?",
    "Tal vez lloré, tal vez reí",
    "Tal vez gané, tal vez perdí",
    "Ahora sé que fui feliz",
    "Que si lloré, también amé",
    "But my heart is beating and my pulses start",
    "Cathedrals in my heart",
    "As we saw oh this light",
    "I swear you, emerge blinking into",
    "To tell me it's alright",
    "But if you never try you'll never know",
    "Just what you're worth",
    "Lights will guide you home",
    "I'm starting with the man in the mirror",
    "I see the dawn of a new beginning",
    "Someone like you and all you know and how you speak",
    "Do you remember?",
    "The twenty-first night of September?",
    "Love was changing the minds of pretenders",
    "While chasing the clouds away",
    "Our hearts were ringing",
    "Tengo pena al corazón",
    "Cuando pase tu melena",
    "Y ya na' me cause pena",
    "Y no conozca no mi voz",
    "Feed the flame",
    "Cause we can't let go",
    "Run away",
    "But we're running in circles",
    "God only knows where this could go",
    "And even if our love starts to grow out of control",
    "And you and me go up in flames",
    "Heaven won't be the same",
    "Antes que se acabe todo esto",
    "Voy a vivir mi vida, si me muero 'e contento",
    "There's a dark part of town",
    "Where the girls get down",
    "There was music in the air",
    "I should have been away",
    "But I knew I'd have to stay",
    "Last train to London",
    "You know it's not the same as it was",
    "You're falling about",
    "You took a left off Last Laugh Lane",
    "Such a pretty house",
    "And such a pretty garden",
    "No alarms and no surprises",
    "When I first saw you",
    "From across the room",
    "I could tell that you were curious",
    "Look at the stars",
    "Look how they shine for you",
    "And everything you do",
    "The kids they call the Goonies",
    "Voy a navegar en tu puerto azul",
    "Quisiera saber de donde vienes tú",
    "Cause love is such an old-fashioned word",
    "And love dares you to care for",
    "The people on the edge of the night",
    "And love dares you to change our way of",
    "Caring about ourselves",
    "Shyness is nice, and",
    "Shyness can stop you",
    "From doing all the things in life you'd like to",
    "'Cause it's too cold",
    "Nobody said it was easy",
    "No one ever said it would be this hard",
    "Oh take me back to the start",
    "I will rearrenge the stage to suit my view",
    "And I won't continue to break, bend or shape for you no more",
    "Acting on your best behaviour",
    "Turn your back on mother nature",
    "Everybody wants to rule the world",
    "No me dejes de querer",
    "Te canto desde muy muy lejos",
    "And I'd give up forever to touch you",
    "Cause I know that you feel me somehow",
    "You're the closest to heaven that I'll ever be",
    "And I don't wanna go home right now",
    "Fumando, bebiendo, chingando, finjiendo que ya no pienso en ti",
    "Said, 'Come on Superman, say your stupid line'",
    "I have these thoughts so often I ought",
    "To replace that slot with what I once bought",
    "Cause somebody stole my car radio",
    "I remember when we ran from the pool",
    "All the decorations up in your room",
    "And if you have a minute why don't we go",
    "Talk about it somewhere only we know?",
    "I can't help falling in love with you",
    "Like a river flows surely to the sea",
    "Do you wanna talk",
    "Do you wanna talk it through?",
    "Swear I ain't got anything on my mind",
    "Cae la noche y amanece en Paris",
    "En el día en que todo ocurrió",
    "Walking on a dream",
    "How can I explain",
    "Jealously, turning saints into the sea",
    "Swimming through sick lullabies",
    "Choking on your alibis",
    "But it's just the price I pay",
    "Destiny is calling me",
    "Open up my eager eyes",
    "Cause I'm Mr. Brightside",
    "Hey Jude don't make it bad",
    "Take a sad song and make it better",
    "Remember to let her into your heart",
    "Then you can start to make it better",
    "That's the way everyday goes",
    "Every time we have no control",
    "If the sky is pink and white",
    "If the ground is black and yellow",
    "Gone now are the old times",
    "Forgotten, time to hold on the railing",
    "The rubik's cube isn't solving for us",
    "Old friends, long forgotten",
    "They all wait at the bottom of",
    "The ocean now has swallowed",
    "The only thing that's left is us",
    "So pardon the silence that you're hearing",
    "It's turnin' into a deafening, painful, shameful roar",
    "Yo te llevo dentro",
    "Hasta la raíz",
    "Y por más que crezca, vas a estar aquí",
    "Aunque yo me oculte tras la montaña",
    "Y encuentre un campo lleno de caña",
    "No habrá manera, mi rayo de luna",
    "Que tú te vayas",
    "But if it's forever, it's even better",
    "I knew you in another life",
    "You had that same look in your eyes",
    "I love you, don't act so surprised",
    "Y a mi me volvió loco tu forma de ser",
    "A mi me volvió loco tu forma de ser",
    "Y, en algún momento, tengo que salir",
    "No puedo estar viviendo todo el día en mí",
    "Soy la música"
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="music">
      <NavBar />
      <div className="header-text">
        <h1 data-aos='zoom-in'>{initialLyrics}</h1>
      </div>
      <div className="music-header"></div>
      <img className="wave10" src="src\assets\wave (10).svg" alt="wave" />
      <div className="playlists">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/13RyrFc7VvdswGIwKi7gKe?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/6UWE1hTSqlNqxp0MjRqlVt?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/0akwkFdj4Ea5BuQqxq6Dvt?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/3qbVLAkaxGF7bbxkIGkTBA?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/3s5AU0Bg8gm72zVop5sWIY?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/3lRP7STTyA8KLRaB93mv11?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="lyrics-animation">
        {lyrics.map((lyric, index) => (
          <p key={index} data-aos="fade-up">
            {lyric}
          </p>
        ))}
      </div>
      <img className="wave3" src="src/assets/wave (5).svg" alt="wave" />
      <Footer />
    </div>
  );
};

export default Music;
