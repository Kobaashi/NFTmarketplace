import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true},
  Name: { type: String, required: true},
  ava: { type: String, required: true},
  wallet: { type: String, required: true},
  volume: { type: Number, required: true},
  sold_allTime: { type: Number, required: true},
  sold_month: { type: Number, required: true},
  sold_week: { type: Number, required: true},
  sold_today: { type: Number, required: true},
  followers: { type: Number, required: true},
  bio: { type: String, required: true},
  change: { type: String, required: true},
  created: [ { nft_id: {type: String, required: true} }  ]
});

export default mongoose.model('User', UserSchema, 'users');
