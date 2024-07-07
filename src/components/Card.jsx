const Card = ({ ele, addToFavorite, removeFav }) => {
  const { imgurl, title, type, price, address, beds, bath, sqft, liked } = ele;

  const handleFav = () => {
    liked ? removeFav(ele) : addToFavorite(ele)
  }

  return (
    <div className="rounded-[10px] border relative bg-white hover:scale-[1.015] transition-all">
      <img
        src={imgurl}
        alt={title}
        className="h-[220px] w-[350px] object-cover rounded-t-[10px]"
      />
      <div className="absolute top-[200px] left-[-21px]">
        <p className="badge">&#x2726; POPULAR</p>
      </div>

      {/* text details start  */}
      <div className="p-4 relative z-10">
        <div className="flex mt-2 justify-between items-center">
          <p className="text-[#4444dd] font-medium text-[34px]">
            ${price}
            <span className="text-xl">/month</span>
          </p>
          <p className="border-[1px] z-20 border-[#4444dd] h-[45px] w-[45px] rounded-full items-center flex justify-center cursor-pointer" onClick={() => handleFav()}>
            {liked ? (
              <i className="fa-sharp fa-solid fa-heart text-[red] text-xl"></i>
            ) : (
              <i className="fa-sharp fa-regular fa-heart text-[red] text-xl font-thin"></i>
            )}
          </p>
        </div>

        <p className="text-[40px] font-semibold">{title}</p>
        <p className="text-gray-500 font-medium">{address}</p>

        <div className="flex justify-between mt-4 text-gray-600">
          <div>
            <p>
              <i className="fa-solid fa-bed text-[#4444dd]"></i> {beds} Beds
            </p>
          </div>
          <div>
            <p>
              <i className="fa-sharp fa-solid fa-bath text-[#4444dd]"></i>{" "}
              {bath} Bathroom
            </p>
          </div>
          <div>
            <p className="relative">
              <i className="fa-solid fa-mountain-sun text-[#4444dd]"></i> {sqft}
              m<span className="absolute top-[-4px] text-sm">2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
