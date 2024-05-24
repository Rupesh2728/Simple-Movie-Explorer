import 'bootstrap/dist/css/bootstrap.css';
import classes from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = ({searchTerm, setSearchTerm,handleInputChange,handleSearch,movie,genre}) => {
  return (
        <div className={classes.searchbardiv}>
         {movie===false && genre===false &&  
         <input type="text" placeholder="Search Here..." className={classes.searchbar} value={searchTerm} onChange={handleInputChange} disabled/>}
          
          {(movie===true || genre===true) &&  
         <input type="text" placeholder="Search Here..." className={classes.searchbar} value={searchTerm} onChange={handleInputChange}/>}

          <div className={classes.searchicon}>
            <FontAwesomeIcon icon={faSearch} size='xl' style={{ color: "#ff0000", }} onClick={handleSearch} />
          </div>
        </div>
  );
}

export default SearchBar;