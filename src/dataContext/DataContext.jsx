import { createContext, useEffect, useState } from "react"
import { data } from "../data"

export const RealEstate = createContext()

const DataContext = ({children}) => {
    const [mainData, setMainData] = useState(data);
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("localData")) || [])

    useEffect(() => {
        let arr = [...mainData];
        for(let i = 0; i < localData.length; i++){
            arr = arr.map((ele) => ele.title === localData[i].title ? {...ele, liked: true} : ele);
        }
        setMainData(arr)
    }, [])

    useEffect(() => {
        localStorage.setItem("localData", JSON.stringify(localData))
    }, [localData])

    const addToFavorite = (element) => {
        let arr = [...mainData];
        arr = arr.map((ele) => ele.title === element.title ? {...ele, liked: true} : ele);
        setMainData(arr)

        element.liked = true;
        setLocalData([...localData, element])
    }

    const removeFav = (element) => {

        let arr = [...mainData];
        arr = arr.map((ele) => ele.title === element.title ? {...ele, liked: false} : ele);
        setMainData(arr)


        let localArr = [...localData];
        localArr = localArr.filter((ele) => ele.title !== element.title);
        setLocalData(localArr);
    }

    const handleSearch = (city, date, price, property) => {
        console.log(city, date, price, property);
        let arr = [...data];
    
        if (city) {
            const lowerCity = city.toLowerCase();
            arr = arr.filter((ele) => {
                return ele.address.toLowerCase().includes(lowerCity);
            });
        }
    
        if (price) {
            arr = arr.filter((ele) => {
                return ele.price <= Number(price) && ele.price >= Number(price) - 500;
            });
        }
    
        if (property) {
            if(property === "all"){
                setMainData(arr);
                return;
            }else{
                arr = arr.filter((ele) => {
                    return ele.type === property;
                });
                setMainData(arr);
            }
        }else{
        setMainData(arr);
        }

    };

    const resetSearch = () => {
        setMainData(data);
    }
    
  return (
    <RealEstate.Provider value={{mainData, localData, setMainData, addToFavorite, removeFav, handleSearch, resetSearch}}>
        {children}
    </RealEstate.Provider>
  )
}

export default DataContext
