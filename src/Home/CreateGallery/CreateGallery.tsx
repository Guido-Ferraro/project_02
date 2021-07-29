import { Link } from "react-router-dom";
import { useGetGamesListQuery } from "../../features/gamesAPI";
import { gamesListType, gameData } from "../../features/types";

const CreateGallery = () => {
  const { data = [] } = useGetGamesListQuery();

  const galleryItems = (arr: gamesListType) => {
    return (
      <ul>
        {arr.map((item: gameData) => {
          const { id, name } = item;
          return (
            <li key={`${id}`}>
              <Link to={`/game/${id}`} className="game-link">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return <>{galleryItems(data)}</>;
};

export default CreateGallery;
