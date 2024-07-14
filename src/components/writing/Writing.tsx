import { useState, useId } from 'react';
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import Title from "./Title";
import "./Writing.css";
import WritingCard from "./WritingCard";

const Writing = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  const cardIdPrefix = useId();

  const handleCardClick = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const cards = [
    {
      title: "Cambio, Aceptación o Resignación",
      description: `Un día pensando me pregunté que postura debemos adoptar ante el cambio en nuestras vidas, si lo comprendemos como una serie de eventos constantes inevitables, cual sería la diferencia entre la aceptación y la resignación ante ello. Si no son lo mismo ¿Cuál es la diferencia, y que postura deberíamos de adoptar ente el cambio? 

El cambio indica que algo ha sucedido, algo es diferente, esto nos puede parecer desemejante y sentirnos disconformes. De pronto estamos enfermos, murió una persona a la cual amábamos, nos mudamos de ciudad, nos separamos de la familia, cambiamos de amigos, abandonamos viejos hábitos, vemos el paso del tiempo en nuestra piel, planteamos nuevas metas, vivimos el fin de viejas relaciones, desarrollamos nuevas creencias y valores. Por mencionar algunos cambios que podemos experimentar a lo largo de nuestras vidas; sin embargo, podemos tener la certeza de que experimentaremos alguno que otro inevitablemente. 

Cuando nos resignamos, el cambio es desgarrador, parece un arrebato injusto de la vida de algo que era nuestro, aquel que vive resignado sueña el pasado en el presente, se autocastiga a si mismo por eventos fuera de su control, su ceguera no le permite ver que estas nuevas situaciones se convierten en su nuevo camino, en nuevas oportunidades, un nacimiento, nuestra percepción determina nuestra realidad como algo bueno o malo, y nuestra actitud decide nuestras acciones. 

A través del poder de la aceptación, entendemos que hay cosas que no podemos controlar, pero lo que decidimos hacer respecto a ellas esta en nuestro control. La voluntad es nuestro poder interno que jamás puede ser afectado por el mundo exterior. Nuestras reacciones son la única variable que podemos controlar y eso es más que suficiente para vivir plenamente.

Plantar cara ante estos cambios forja nuestro espíritu, nuestro carácter, implica desarrollar una actitud positiva, una voluntad inamovible. Adentrarse en un mar de lo desconocido, con miedo quizás, pero con la firme certeza y confianza, de que al salir habremos trascendido, no seremos más rígidos, al contrario, fluiremos libremente en el río de la vida nadando con la corriente.

Invito a que reflexionen en que manera afrontan los cambios en su vida, y a reconocer si existe alguna situación pasada o en curso a la cual nos resignamos a aceptar que podamos liberar y poder así plantar una semilla para un porvenir emocionante. 

Todo lo mejor y solo lo mejor. 

Santiago Martínez.

`,
      image: "src/assets/okinawa.jpg",
      date: "November 5, 2023",
      readTime: "5 min read",
    },
    {
      title: "Soledad y Aislamiento",
      description: `En múltiples ocasiones me eh encontrado como coloquialmente decimos ‘solo’ y me he preguntado si ¿La soledad es un estado que el humano busca evitar por naturaleza? ¿Instintivamente anhelamos estar rodeados? Y si no ¿Es perjudicial la soledad, o puede presentarse como oportunidad?

La soledad es un desierto para la mente, es un espacio de silencio, sin distracciones, sin preocupaciones, en él te encuentras contigo mismo, en este estado uno siente la presencia de Dios, nace la reflexión, es un espacio para la introspección, para conocerse a si mismo, los sentidos despiertan y estamos más atentos. En estos momentos podemos cambiar lo que es preciso de nosotros mismos, nutrir la mente, el cuerpo, y el alma. 

Podemos estar solos sin estar aislados, como humanos no debemos aislarnos, estamos interconectados en todos los niveles  y ámbitos sociales, dependemos hasta cierto punto de todos, una persona no puede acaparar todos los puestos necesarios para su subsistencia, estos roles se reparten a través de muchas personas para que pueda existir una sociedad moderna como la conocemos. Por lo que si, instintivamente buscamos relacionarnos para poder sobrevivir; sin embargo, debemos practicar estados de soledad en nuestra vida, el espacio en donde el ser humano pueda dormir y comer es más que suficiente. 

Como menciona Mario Satz en su libro Breve Tratado a la Soledad, “Es preciso retirarse lejos, partir en la búsqueda del grial interior” (Satz, 2022). Para el practicante de la soledad esta se convierte en compañera, al comienzo puede ser una pena que eventualmente se convertirá en una alegría plena. 

El algún punto la soledad adquiere su significado con respecto a la multitud. Uno busca la soledad no por desprecio al mundo, alcanza un punto en el que se siente atraído por este camino hacia si mismo, descubrimos el fuego que emana de nuestro interior, cuando conectamos con nosotros mismos conectamos con Dios, y ansiamos volver seguido. Al final que es Dios sino lo más yo que hay en mí. 

Uno no siempre se ve atraído a este estado por decisión propia, las impertinencias de la vida nos llevan a buscar respuestas. No resulta hasta que uno voltea al interior y se escucha así mismo, que  comprendemos que la respuesta siempre ha estado dentro, un universo interior se revela en forma de hallazgo. En este punto creo no hay nada más hermoso que poder escuchar el latir del propio corazón. 

Todo lo mejor y solo lo mejor. 

Santiago Martínez.

Bajo un pino solitario 
El tiempo pasa con rapidez, 
Sobre mi cabeza el cielo infinito.

`,
      image: "src/assets/lone.jpg",
      date: "September 27, 2023",
      readTime: "5 min read",
    },
    {
      title: "Postura del Guerrero",
      description: `Aquel que se revela porque no quiere vivir como los demás, es un guerrero, el entiende que la unidad subyace en todo lo que existe que, que el valor de todos y todas las cosas esta en su amor intrínseco, solo el puede ver a los demás a los ojos y en ellos perderse para reencontrarse a si mismo. 

Un guerrero nunca gana o pierde, entiende que se encuentra peleando una lucha constante por controlar sus emociones, tener autodominio, disciplina y fuerza. No gana o pierde su consciencia despierta es suficiente para motivar una vida de disciplina, de una voluntad inamovible, de contemplación. 

Un guerrero ritualiza su vida, crea procesos y entornos de contemplación. Ve pasar el tiempo sin sentir desesperación, solo una dicha de estar vivo, de sentir el aire al respirar, el sol en su cara, la brisa en su piel, de escuchar el cantar de los pájaros. 

El guerrero se puede sentir solitario, al final él es alguien despierto, un sobrio en una fiesta llena de borrachos. Solo el puede ver con cierta claridad lo que muchas otros no. El guerrero no niega la vida él enfrenta las caras de la vida, de dolor, tristeza, enfermedad, y muerte, pero también de dicha, alegría, y oportunidad, con determinación, templanza, fe y amor; sin embargo, sobre todo con mucho amor. 

El guerrero reconoce en si mismo su llama, su corazón como una fuerza y camino que lo guía hacía la luz, podrá, quizás, un balde de agua fría apaciguar la llama, pero esta nunca dejará de arder, el guerrero pinta su vida con amor, cada pincelada se realiza con amor, su vida se convierte en una obra de arte en la cual cada simple acto se realiza con amor. 

En su andar entiende que por los demás puede compartir su amor, este se impregnará en cada árbol, montaña, río, y mar, cada persona, cada sueño, cada lágrima, cada beso, cada despedida y bienvenida, cada saludo, en cada creación. Su amor quedará estampado atemporalmente, su amor simplemente es. 

Para ese niño que sigue jugando a aventarse bellotas como perdigones con su padre.

Para ti con cariño, un guerrero atento.

`,
      image: "src/assets/snoopy.jpg",
      date: "September 17, 2023",
      readTime: "5 min read",
    },
    {
      title: "Vuelo Perdido",
      description: `Perdí un vuelo, por andar de zopilote como diría mi familia, tengo que esperar ocho horas y he estado observando a algunas personas pasar, anotaré cosas que me parezcan interesantes, o solo curiosas. 

- Se acostó una persona en frente de mí y colocó los pies elevados sobre un asiento y su espalda en el piso, interesantemente está descalza y tiene un a manta con la cual se tapo en el suelo. Actualización, se levanto y comenzó a insultar a todo mundo en inglés, como una amiga ing. diría, que verga.

- No he visto a una sola persona con un libro; por otro lado, ya perdí la cuenta de cuantas personas tienen un envase de Starbucks en sus manos.

- Paso una persona hablando al teléfono reprochando haber perdido el vuelo, muy probablemente el mismo vuelo que perdí yo.

- Una mujer tiene un cubrebocas, me recuerda mucho a la pandemia, recuerdo colectivo que parece ya olvidado.

- Se sentó un hombre frente a nosotros, se veía con cierta tristeza y cansancio encima, desconozco porqué o que sucedió con su vuelo, pero después le llevaron otro ticket a su asiento.

- Creo que han pasado más de 20 personas en silla de ruedas, la mayoría de la tercera edad. Se que envejecer y crecer es una parte bella e inevitable de la vida; aunque, admito me aterra perder mis facultades y capacidades físicas.

- Siempre que voy al aeropuerto hay algún equipo de un deporte con sus uniformes del mismo color.

- Hay una figura de Spider-Man tamaño real hipertrofiada, como anuncio del antro coco bongo de Cancún, cito a la Ingeniera una vez más, que verga.

- El uniforme de los pilotos como símbolo de estatus, prestigio y respeto.

- Se levantó una pareja de ancianos, el señor tomó las maletas de ambos y comenzó a caminar a la terminal adelantándose sin esperar el paso de su esposa, de que sirve el gesto de llevar ambas maletas si no caminan juntos.

- Yo creo que me comeré una hamburguesa del karl junior.

- Vi a dos personas con carne en una caja. Una de San Juan y la otra de la Ramos, San Juan es mejor, irrebatible. Actualización, volví a ver a alguien con carne San Juan, resultado fianl San Juan 2 - Ramos 1.

`,
      image: "src/assets/lost.jpg",
      date: "November 3, 2023",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="writing">
      <NavBar />
      <div className="writing-title">
        <div className="writing-image">
          <img src='src/assets/writing.jpg' alt='writing' />
          <div className="title">
            <Title title="Thoughts" subtitle="in words" />
            <h1>Sometimes words do can express how we feel</h1>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="writing-cards">
        {expandedCardIndex === null ? (
          cards.map((card, index) => (
            <div
              key={`${cardIdPrefix}-${index}`} 
              className="writing-card"
              onClick={() => handleCardClick(index)}
            >
              <div className="writing-card-content">
                <WritingCard
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  date={card.date}
                  readTime={card.readTime}
                  isExpanded={false}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="writing-card expanded">
            <div className="writing-card-content" onClick={() => setExpandedCardIndex(null)}>
              <WritingCard
                title={cards[expandedCardIndex].title}
                description={cards[expandedCardIndex].description}
                image={cards[expandedCardIndex].image}
                date={cards[expandedCardIndex].date}
                readTime={cards[expandedCardIndex].readTime}
                isExpanded={true}
              />
              <button onClick={() => setExpandedCardIndex(null)}>Back</button>
            </div>
          </div>
        )}
      </div>
      <img className='wave3' src='src/assets/wave (5).svg' alt='wave' />
      <Footer />
    </div>
  );
}

export default Writing;
