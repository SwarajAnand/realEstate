import { useContext } from "react"
import Card from "./Card"
import { RealEstate } from "../dataContext/DataContext"
import FiltersPage from "./FiltersPage";

const Body = () => {
  const {mainData, addToFavorite, removeFav} = useContext(RealEstate);

  return (
    <div className="md:px-[40px]">
    <div className="py-4 px-6">
    <FiltersPage />
    </div>

      <div className="flex flex-wrap justify-center gap-10 mt-8 p-10 md:p-4">
        {
          mainData.map((ele) => {
                return <Card ele={ele} addToFavorite={addToFavorite} removeFav={removeFav} key={ele.id} />
            })
        }
      </div>
    </div>
  )
}

export default Body
