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

  tabs = [
    {
      name: "NFTs"
    },
    {
      name: "Collection"
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
