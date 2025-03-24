import mongoose from 'mongoose';

const NftSchema = new mongoose.Schema({
  nft_id: { type: Number, required: true},
  nft_name: { type: String, required: true},
  picture: { type: String, required: true},
  artist: { type: String, required: true},
  collections: { type: Number, required: true},
  categories: { type: Number, required: true},
  price: { type: Number, required: true},
  highest_bid: { type: Number, required: true}
});

export default mongoose.model('Nft', NftSchema, 'nft');
