import {Link, useNavigate} from "react-router-dom";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import {CategoryCardBody, CategoryCardsContainer} from "./CategoryCard.styles";

export const CategoryCardComponent =()=>{
    const navigate = useNavigate()
    const categories = [
        {
            categoryName: "All movies",
            link: ()=> navigate("/all-movies")
        },
        {
            categoryName: "Action",
            total: 2000,
            link:"/action",

        },
        {
            categoryName: "Adventure",
            total: 1300,
            link:"/action",
        },
        {
            categoryName: "Anime",
            total: 1500,
            link:"/action",
        },
        {
            categoryName: "Comedy",
            total: 1000,
            link:"/action",
        },
        {
            categoryName: "Crime",
            total: 500,
            link:"/action"
        },
        {
            categoryName: "Documentary",
            total: 300,
            link:"/action"
        },
        {
            categoryName: "Drama",
            total: 700,
            link:"/action"
        },
        {
            categoryName: "Family",
            total: 200,
            link:"/action"
        },
        {
            categoryName: "History",
            total: 150,
            link:"/action"
        },
        {
            categoryName: "Horror",
            total: 500,
            link:"/action"
        },
        {
            categoryName: "Music",
            total:200,
            link:"/action"
        },{
            categoryName: "Mystery",
            total: 700,
            link:"/action"
        },{
            categoryName: "Romance",
            total: 300,
            link:"/action"
        },{
            categoryName: "Science Fiction",
            total: 400,
            link:"/action"
        },{
            categoryName: "Tv movie",
            total: 3000,
            link:"/action"
        },{
            categoryName: "Thriller",
            total: 3500,
            link:"/action"
        },{
            categoryName: "War",
            total: 2000,
            link:"/action"
        },
        {
            categoryName: "Western",
            total: 300,
            link:"/action"
        },
    ]
    return(
        <>
            <CategoryCardsContainer>


                {
                    categories.map((cat)=>{
                        return(
                            <>
                                <CategoryCardBody onClick={cat.link} key={cat.link}>
                                    <h5>{cat.categoryName}</h5>
                                    {cat.total &&  <p>{`${cat.total} +`}</p> }
                                </CategoryCardBody>
                            </>
                        )
                    })
                }


            </CategoryCardsContainer>
        </>
    )
}