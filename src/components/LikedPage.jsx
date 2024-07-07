import { useContext } from "react";
import Header from "./Header";
import Card from "./Card";
import { RealEstate } from "../dataContext/DataContext";

const LikedPage = () => {
  const { localData, addToFavorite, removeFav } = useContext(RealEstate);
  return (
    <div>
      <Header />
      <div className="mt-8">
        {localData?.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-10 mt-8 p-10 md:p-4">
            {localData.map((ele) => {
              console.log(ele)
              return (
                <Card
                  ele={ele}
                  addToFavorite={addToFavorite}
                  removeFav={removeFav}
                  key={ele.id}
                />
              );
            })}
          </div>
        ) : (
          <h1 className="text-3xl text-center">Nothing to Show here</h1>
        )}
      </div>
    </div>
  );
};

export default LikedPage;
