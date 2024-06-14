import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import { useSelector } from "react-redux";

const Home = () => {
    const categories = useSelector( store => store.reducer.categories);
    return (
        <div className="container">
            <h1>Home</h1>
        {
            categories.map(item =>{
                return <CategoryComponent key={item} category={item} limit={3} />
            })
        }
        </div>
    );
}

export default Home;
