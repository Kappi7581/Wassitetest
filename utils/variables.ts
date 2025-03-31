import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsGoogle, BsInstagram, BsTwitterX, BsYoutube, BsTelegram } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { FaFigma } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiBootstrap, SiBun, SiBuymeacoffee, SiCss3, SiDeviantart, SiDiscord, SiExpress, SiFirebase, SiGatsby, SiGit, SiGlitch, SiInstagram, SiJavascript, SiLua, SiMongodb, SiPatreon, SiPnpm, SiReact, SiReplit, SiRoblox, SiTailwindcss, SiTypescript, SiWindowsterminal } from 'react-icons/si';
import { TbBrandBootstrap, TbBrandCSharp, TbBrandDiscord, TbBrandHtml5, TbBrandNextjs, TbBrandNodejs } from 'react-icons/tb';

// Burayı .env'den variables'e taşıdım ama dilerseniz geri .env'ye taşıyabilirsiniz.
// Önemli : Eğer api key, token vs. bağlayacaksanız .env'ye taşıyın!!!
export const githubUsername = "Kappi7581";
export const discordId = "";

export const works: { name: string; description: string; iconURL: string; link: string; view: string;}[] = [
  {
    name: 'WAS | İNSOMİA #LEGEND ..',
    description: 'Telegram',
    link: 't.me/uhuvi',
    view: '/resimler/proje-referans-tasarım.png',
    iconURL: '/resimler/logo-tasarım-2.png',
  },
  {
    name: 'Was Arsiv',
    description: 'Telegram da tooler illegal iceriklerin paylaşıldı kanal.',
    link: 'https://t.me/+HWvy-HWbWAg0Njdk',
    view: '',
    iconURL: '',
  },
];




// iconURL için kendiniz libraryden tanımlarına bakıp kendi iconURL'nizi ekleyebilirsiniz. (kaynak : react-icons /bs)
export const socialMediaAccounts: { name: string; link: string; iconURL: IconType; username: string}[] = [
  {
    name: 'Telegram',
    username: '@uhuvi',
    link: 't.me/uhuvi',
    iconURL: BsTelegram,
  },
  {
    name: 'Was Arsiv',
    username: 'Telegram',
    link: 'https://t.me/+HWvy-HWbWAg0Njdk',
    iconURL: BsTelegram,
  },
];

// iconURL için kendiniz libraryden tanımlarına bakıp kendi iconURL'nizi ekleyebilirsiniz.
export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'JavaScript',
    iconURL: SiJavascript,
  },
  {
    name: 'HTML5',
    iconURL: TbBrandHtml5,
  },
  {
    name: 'CSS',
    iconURL: SiCss3,
  },
  {
    name: 'Node.js',
    iconURL: TbBrandNodejs,
  },
  {
    name: 'Bootstrap',
    iconURL: TbBrandBootstrap,
  },
  {
    name: 'Discord.js',
    iconURL: SiDiscord,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express.js',
    iconURL: SiExpress,
  },
  {
    name: 'Lua',
    iconURL: SiLua,
  },
  {
    name: 'Terminal',
    iconURL: SiWindowsterminal,
  },
  {
    name: 'TypeScript',
    iconURL: SiTypescript,
  },
  {
    name: 'Photoshop',
    iconURL: SiAdobephotoshop,
  },
  {
    name: 'Bun',
    iconURL: SiBun,
  },
  {
    name: 'pnpm',
    iconURL: SiPnpm,
  },
  {
    name: 'Git',
    iconURL: SiGit,
  },
  {
    name: 'Premiere Pro',
    iconURL: SiAdobepremierepro,
  },
];
