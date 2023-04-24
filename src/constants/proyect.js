import fundacionAnimal from '../assets/imgComplet/fundacionAnimal.webp';
import recipes from '../assets/imgComplet/recipes.webp';
import cost from '../assets/imgComplet/const.webp';
import citas from '../assets/imgComplet/citas.webp';
import video from '../assets/videos/GrabaciónRefugio.gif';
import recipesGif from '../assets/videos/GrabaciónRecipes.gif';
import costGif from '../assets/videos/GrabaciónCosto.gif';
import citasGif from '../assets/videos/GrabaciónCitas.gif';
import refugioPhone from '../assets/phone/refugio.jpg'
import recipesPhone from '../assets/phone/recipes.jpg'
import controlPhone from '../assets/phone/control.jpg'
import citasPhone from '../assets/phone/citas.jpg'

export const proyect = [
  {
    title: 'Refugio Animal',
    img: video,
    imgPhone: refugioPhone,
    description: 'Este proyecto, realizado para un refugio real, facilita la etapa de adopción de animales rescatados y la administración tanto de las donaciones como de las solicitudes de adopción',
    left: true,
    background: fundacionAnimal,
    buttons: [
      {
        cn:'fa-brands fa-github text-[2rem] md:text-[2rem]',
        url: 'https://github.com/Ramir095/FE-Shelter',
        text: 'Repositorio'
      } ,
      {
        cn:'fa-brands fa-chrome text-3xl',
        url: 'https://fe-shelter.vercel.app/',
        text:'Deploy'
      }
    ]
  },
  {
    title: 'Recetas Vegetarianas',
    img: recipesGif,
    imgPhone: recipesPhone,
    description: 'Página donde puedes visualizar las mejores recetas tanto vegetarianas como veganas. Si estás buscando ideas deliciosas y saludables para tus comidas sin carne, este lugar es el indicado',
    background: recipes,
    left: false,
    buttons: [
      {
        cn:'fa-brands fa-github text-[2rem] md:text-[2rem]',
        url: 'https://github.com/Ramir095/Pi-Food',
        text: 'Repositorio'
      } ,
      {
        cn:'fa-brands fa-chrome text-3xl',
        url: 'https://recipes.rama-dev.com/',
        text:'Deploy'
      }
    ]
  },
  {
    title: 'Planificador De Gastos',
    img: costGif,
    imgPhone: controlPhone,
    description: 'Esta herramienta te permitirá controlar de manera sencilla y rápida tu dinero. Podrás ahorrar tiempo y esfuerzo en tus cálculos y asegurarte de que estás tomando decisiones informadas y precisas',
    left: true,
    background: cost,
    buttons: [
      {
        cn:'fa-brands fa-github text-[2rem] md:text-[2rem]',
        url: 'https://github.com/Ramir095/Cost-Control-App',
        text: 'Repositorio'
      } ,
      {
        cn:'fa-brands fa-chrome text-3xl',
        url: 'https://cost.rama-dev.com/',
        text:'Deploy'
      }
    ]
  },
  {
    title: 'Administración De Citas',
    img: citasGif,
    imgPhone: citasPhone,
    description: 'Este servicio te permitire programar una cita en línea de manera rápida y fácil. Olvídate de las largas esperas en la clínica veterinaria y programa tu cita desde la comodidad de tu hogar o trabajo',
    left: false,
    background: citas,
    buttons: [
      {
        cn:'fa-brands fa-github text-[2rem] md:text-[2rem]',
        url: 'https://github.com/Ramir095/Citas-React',
        text: 'Repositorio'
      } ,
      {
        cn:'fa-brands fa-chrome text-3xl',
        url: 'https://citas-react-one.vercel.app/',
        text:'Deploy'
      }
    ]
  }
];
