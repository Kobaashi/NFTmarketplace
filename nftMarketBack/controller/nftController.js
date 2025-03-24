
const fetch = async (req, res) => {
  try {
    const nft = await NFT.find();

    console.log('Fetched items:', nft.length > 0 ? nft : 'No items found');

    if (nft.length === 0) {
      return res.status(404).json({ message: 'No items found' });
    }

    res.json(nft);
  } catch (err) {
    console.error('❌ Error fetching items:', err);
    res.status(500).json({ error: err.message });
  }
}

export default fetch;
