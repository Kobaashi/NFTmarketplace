import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Nft from './model/nftModel.js';
import fetch from './controller/nftController.js';
import User from './model/usersModel.js';

const app = express();
const PORT = 5000;
const mongodb = 'mongodb+srv://IvanUkrainets:UdeChnu@cluster0.yzjnh.mongodb.net/NFTMarketplace?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(mongodb)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Errot connect to MongoDB', err));
  app.use(cors());

app.get('/', (req, res) => {
  res.send('MonogoDB connected, enjoy');
});

app.get('/nft', async (req, res) => {
  try {
    const nft  = await Nft.find();
    console.log('Зчитанні дані:', nft.length > 0 ? nft : 'Даних немає');

    if (nft.length  === 0) {
      return  res.status(404).send('NFT немає');
    }

    res.json(nft);
  } catch (err) {
    console.error('Помилка зчитування NFT:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users  = await User.find();
    console.log('Зчитанні користувачі:', users.length > 0 ? users : 'Користувачів немає');

    if (users.length  === 0) {
      return  res.status(404).send('Користувачів немає');
    }

    res.json(users);
  } catch (err) {
    console.error('Помилка зчитування Користувачів:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
