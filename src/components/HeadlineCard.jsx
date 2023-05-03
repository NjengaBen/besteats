const HeadlineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full rounded-xl bg-black/50 text-white">
          <p className="font-bold text-2xl px-2 pt-4">Suns Out, BOGOs Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:border-orange-600 hover:bg-orange-600 hover:text-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full rounded-xl bg-black/50 text-white">
          <p className="font-bold text-2xl px-2 pt-4">Vegan Dishes Too</p>
          <p className="px-2">At Your Convenience</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:border-orange-600 hover:bg-orange-600 hover:text-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/772514/pexels-photo-772514.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full rounded-xl bg-black/50 text-white">
          <p className="font-bold text-2xl px-2 pt-4">Tasty Desserts</p>
          <p className="px-2">Pocket Friendly</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:border-orange-600 hover:bg-orange-600 hover:text-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3296683/pexels-photo-3296683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
