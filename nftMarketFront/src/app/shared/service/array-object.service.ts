import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayObjectService {

  constructor() { }

  // for artist page

  Tabs = [
    {
      name: 'Created',
    },
    {
      name: 'Owned',
    },
    {
      name: 'Collection',
    },
  ]

  NFTS = [
    {
      img: "/img/DistantGalaxy.png",
      name: "Distant Galaxy",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/LifeOnEdena.png",
      name: "life on edena",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/AstroFiction.png",
      name: "astroFcition",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/criptocity.png",
      name: "cryptuCity",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/colorfulDog0524.png",
      name: "colorfulDog 0524",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/SpaceTales.png",
      name: "Space Tales",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/CherryBlossomGirl037.png",
      name: "cherry blossom girl 037",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0987.png",
      name: "dancing robot 0987",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/IceCreamApe.png",
      name: "ice cream ape",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },
  ]

  // for connect page
  wallets = [
    {
      name: "metamask",
      image: "/icons/Metamask.svg"
    },
    {
      name: "wallet connect",
      image: "/icons/WalletConnect.svg"
    },
    {
      name: "coinbase",
      image: "/icons/Coinbase.svg"
    },
  ]

  // for categories section
  categories = [
    {
      icon: "/icons/PaintBrush.svg",
      image: "/img/art.png",
      name: "art"
    },
    {
      icon: "/icons/Swatches.svg",
      image: "/img/IceCreamApe.png",
      name: "collectibles"
    },
    {
      icon: "/icons/MusicNotes.svg",
      image: "/img/music.png",
      name: "music"
    },
    {
      icon: "/icons/Camera.svg",
      image: "/img/photography.png",
      name: "photography"
    },
    {
      icon: "/icons/VideoCamera.svg",
      image: "/img/LifeOnEdena.png",
      name: "video"
    },
    {
      icon: "/icons/MagicWand.svg",
      image: "/img/utility.png",
      name: "utility"
    },
    {
      icon: "/icons/Basketball.svg",
      image: "/img/sport.png",
      name: "sport"
    },
    {
      icon: "/icons/Planet.svg",
      image: "/img/virtualworld.png",
      name: "virtual worlds"
    },
  ]

  // for discover more section
  nfts = [
    {
      image: "/img/DistantGalaxy.png",
      name: "distant galaxy",
      authorAva: "/icons/Rayna.svg",
      authorName: "MoonDancer",
      price: 1.63,
      highestBid: 0.33,
    },
    {
      image: "/img/LifeOnEdena.png",
      name: "life on edena",
      authorAva: "/icons/Angel.svg",
      authorName: "NebulaKid",
      price: 1.63,
      highestBid: 0.33,
    },
    {
      image: "/img/AstroFiction.png",
      name: "astroFiction",
      authorAva: "/icons/Lydia.svg",
      authorName: "Spaceone",
      price: 1.63,
      highestBid: 0.33,
    },
  ]

  // for how to work section
  guides = [
    {
      image: "/icons/wallet.svg",
      title: "setup your wallet",
      description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
    },
    {
      image: "/icons/collection.svg",
      title: "create collection",
      description: "Upload your work and setup your collection. Add a description, social links and floor price."
    },
    {
      image: "/icons/earning.svg",
      title: "start earning",
      description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
    },
  ]

  // for topcreators section
  creators = [
    {
      id: 1,
      ava: "/icons/Jaydon.svg",
      name: "Keepitreal",
      total: 34.53
    },
    {
      id: 2,
      ava: "/icons/Ruben.svg",
      name: "DigiLab",
      total: 34.53
    },
    {
      id: 3,
      ava: "/icons/Alfredo.svg",
      name: "GravityOne",
      total: 34.53
    },
    {
      id: 4,
      ava: "/icons/Davis.svg",
      name: "Juanie",
      total: 34.53
    },
    {
      id: 5,
      ava: "/icons/Livia.svg",
      name: "BlueWhale",
      total: 34.53
    },
    {
      id: 6,
      ava: "/img/fox.png",
      name: "Mr Fox",
      total: 34.53
    },
    {
      id: 7,
      ava: "/icons/Phillip.svg",
      name: "Shroomie",
      total: 34.53
    },
    {
      id: 8,
      ava: "/icons/Maria.svg",
      name: "Robotica",
      total: 34.53
    },
    {
      id: 9,
      ava: "/icons/Stanton.svg",
      name: "RustyRobot",
      total: 34.53
    },
    {
      id: 10,
      ava: "/icons/Avatar.svg",
      name: "Animakid",
      total: 34.53
    },
    {
      id: 11,
      ava: "/icons/Lydia.svg",
      name: "Dotgu",
      total: 34.53
    },
    {
      id: 12,
      ava: "/icons/Jocelyn.svg",
      name: "Ghiblier",
      total: 34.53
    },
  ]

  // for marketplace page
  NFTs = [
    {
      img: "/img/magicMushroom0325.png",
      name: "magic mushroom 0325",
      authorAva: "/icons/Phillip.svg",
      authorName: "Shroomie",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/HappyRobot032.png",
      name: "happy robot 032",
      authorAva: "/icons/Davis.svg",
      authorName: "BeKind2Robots",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/HappyRobot024.png",
      name: "happy robot 024",
      authorAva: "/icons/Davis.svg",
      authorName: "BeKind2Robots",
      price: 1.63,
      bid: 0.33
    },


    {
      img: "/img/Bear.png",
      name: "design bear",
      authorAva: "/icons/Kianna.svg",
      authorName: "mr fox",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/colorfulDog0356.png",
      name: "colorful dog 0356",
      authorAva: "/icons/Lydia.svg",
      authorName: "keepitreal",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0312.png",
      name: "dancing robot 0312",
      authorAva: "/icons/Maria.svg",
      authorName: "robotica",
      price: 1.63,
      bid: 0.33
    },


    {
      img: "/img/CherryBlossomGirl037.png",
      name: "cherry blossom girl 037",
      authorAva: "/icons/Rayna.svg",
      authorName: "moonDancer",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/SpaceTravel.png",
      name: "space travel",
      authorAva: "/icons/Angel.svg",
      authorName: "nebulaKid",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/SunsetDimension.png",
      name: "sunset dimension",
      authorAva: "/icons/Avatar.svg",
      authorName: "animakid",
      price: 1.63,
      bid: 0.33
    },


    {
      img: "/img/DesertWalk.png",
      name: "desert walk",
      authorAva: "/img/AstroFiction.png",
      authorName: "Catch 22",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/IceCreamApe.png",
      name: "ice cream ape 0324",
      authorAva: "/img/IceCreamApe.png",
      authorName: "ice ape club",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/ColorfulDog0344.png",
      name: "colorful dog 0344",
      authorAva: "/img/colorfulDog0356.png",
      authorName: "puppyPower",
      price: 1.63,
      bid: 0.33
    },
  ]

  tabs = [
    {
      name: "NFTs"
    },
    {
      name: "Collection"
    },
  ]

  /*
  for ranking page
  */
  artists = [
    {
      id: 1,
      ava: "/icons/Jaydon.svg",
      fullname: "jaydon ekstorm",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 2,
      ava: "/icons/Ruben.svg",
      fullname: "ruben carder",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 3,
      ava: "/icons/Alfredo.svg",
      fullname: "alfredo septimus",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 4,
      ava: "/icons/Davis.svg",
      fullname: "davis franci",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 5,
      ava: "/icons/Livia.svg",
      fullname: "livia rosser",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 6,
      ava: "/icons/Kianna.svg",
      fullname: "kianna donin",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 7,
      ava: "/icons/Phillip.svg",
      fullname: "Phillip Lipshutz",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 8,
      ava: "/icons/Maria.svg",
      fullname: "Maria Rosser",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 9,
      ava: "/icons/Stanton.svg",
      fullname: "Kianna Stanton",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 10,
      ava: "/icons/Angel.svg",
      fullname: "angel lubin",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 11,
      ava: "/icons/Allison.svg",
      fullname: "allison torff",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 12,
      ava: "/icons/Davis.svg",
      fullname: "davis workman",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 13,
      ava: "/icons/Lindsey.svg",
      fullname: "Lindsey Lipshutz",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 14,
      ava: "/icons/Randy.svg",
      fullname: "randy carder",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 15,
      ava: "/icons/Lydia.svg",
      fullname: "lydia culhane",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 16,
      ava: "/icons/Rayna.svg",
      fullname: "rayna bator",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 17,
      ava: "/icons/Jocelyn.svg",
      fullname: "jocelyn westervelt",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 18,
      ava: "/icons/Jaydon.svg",
      fullname: "marilyn torff",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 19,
      ava: "/icons/Angel.svg",
      fullname: "skylar levin",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
    {
      id: 20,
      ava: "/icons/Alfredo.svg",
      fullname: "terry dorwart",
      change: "+1.41%",
      sold: 602,
      volume: 12.4
    },
  ]

  titles = [
    {
      title: "Today"
    },
    {
      title: "This Week"
    },
    {
      title: "This Month"
    },
    {
      title: "All Time"
    },
  ]

  Mobtitle = [
    {
      title: "1d"
    },
    {
      title: "7d"
    },
    {
      title: "30d"
    },
    {
      title: "All Time"
    },
  ]

  // for nft page
  NFTsN = [
    {
      img: "/img/fox.png",
      name: "foxy life",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Cat.png",
      name: "cat from future",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Dog.png",
      name: "psycho dog",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },


    {
      img: "/img/Bear.png",
      name: "design bear",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0375.png",
      name: "dancing robot 0375",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0356.png",
      name: "dancing robot 0356",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0312.png",
      name: "dancing robot 0321",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0512.png",
      name: "dancing robot 0512",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
    {
      img: "/img/Robot0024.png",
      name: "dancing robot 0024",
      authorAva: "/icons/Stanton.svg",
      authorName: "Orbitian",
      price: 1.63,
      bid: 0.33
    },
  ]

  tags = [
    {
      name: "animation"
    },
    {
      name: "illustration"
    },
    {
      name: "moon"
    },
  ]

}
