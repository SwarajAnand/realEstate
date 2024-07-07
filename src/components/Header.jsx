import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className="flex items-center py-4 px-8 justify-between">
            <div className="flex text-xl items-center justify-between w-[70%]">
                <h1 className="font-medium text-2xl cursor-pointer" onClick={() => navigate("/")}><i className="fa-solid fa-envelope-open text-[#4444dd]"></i> Estatery</h1>
                <ul className="flex justify-start gap-7 cursor-pointer w-[60%] items-center">
                    <li className="text-[#4444dd] bg-[#a8a8ce] py-2 px-6 rounded-md">Rent</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Manage Property <i className="fa-solid fa-chevron-down text-sm"></i></li>
                    <li>Resources <i className="fa-solid fa-chevron-down text-sm"></i></li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center text-xl gap-8">
                    <li onClick={() => navigate("/liked")} className="bg-[#4444dd] text-white rounded-md py-3 px-6 cursor-pointer">Liked Property</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;