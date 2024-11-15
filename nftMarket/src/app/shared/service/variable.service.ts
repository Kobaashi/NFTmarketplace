import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  constructor() { }

  // for artist page
  bg: string = "/img/tower.png";
  ava: string = "/icons/Avatar.svg";
  plus: string = "/icons/Plus.svg";
  copy: string = "/icons/Copy.svg";
  globe: string = "/icons/Globe.svg";
  diskord: string = "/icons/DiscordLogo.svg";
  youtube: string = "/icons/YoutubeLogo.svg";
  twitter: string = "/icons/TwitterLogo.svg";
  instagram: string = "/icons/InstagramLogo.svg";

  // for loggin page
  user: string = "/icons/UserGray.svg";
  email: string = "/icons/messageGray.svg";
  pasword: string = "/icons/LockKeyGray.svg";
  bgl: string = "/img/authImage.png";

  // for signup page
  userS: string = "/icons/UserGray.svg";
  Email: string = "/icons/messageGray.svg";
  Password: string = "/icons/LockKeyGray.svg";
  bgs: string = "/img/authImage.png";

  // for connect page
  bgc: string = "/img/connectImage.png";

  // for discover more section
  eye: string = "/icons/Eye.svg";

  // for highlight section
  bgh: string = "/img/NFTHighlight.png";
  bgMobile: string = "/img/bgMobile.png";
  eyeh: string = "/icons/Eye.svg";
  avah: string = "/icons/Phillip.svg";
  bg2: string = "/img/Orbitations.png";
  ava2: string = "/icons/Avatar.svg";

  // for join section
  actronavt: string = "/img/astronavt.png";
  message: string = "/icons/message.svg";
  successMessage: string = '';

  // for topcreators section
  rocket: string = "/icons/RocketPurple.svg";

  isMobile: boolean = true;

  // for hero section
  spaceWalking: string = "/img/spaceWalking.png";
  avatar: string = "/icons/Avatar.svg";
  rockethero: string = "/icons/RocketWhite.svg";

  // for tranding collection section
  dog: string = "/img/Dog.png";
  cat: string = "/img/Cat.png";
  bear: string = "/img/Bear.png";
  fox: string = "/img/fox.png";

  mushrum: string = "/img/mushrum.png";
  FirstMushrum: string = "/img/first-mushrum.png";
  SecondMushrum: string = "/img/three-mushrum.png";
  avatart: string = "/img/avatarka.png";

  robot0312: string = "/img/Robot0312.png";
  robot0512: string = "/img/Robot0512.png";
  robot0987: string = "/img/Robot0987.png";
  robot: string = "/icons/justRobot.svg";

  // for marketplace page
  search: string = "/icons/MagnifyingGlass.svg";

  // for ranking page
  active: boolean = true;
  currentSlideIndex: number = 0;
  index : number = 0;

  // for nft page
  orbitaions: string = "/img/Orbitations.png";
  avan: string = '/icons/Stanton.svg';
  globen: string = '/icons/Globe.svg';
  arrowR: string = "/icons/ArrowRight.svg";

  // for navmenu
  logo: string = "/icons/LogoPurple.svg";
  userm: string = "/icons/User.svg";

  isActive: boolean = false;

  // for footer
  logof: string = "/icons/LogoPurple.svg";

}
