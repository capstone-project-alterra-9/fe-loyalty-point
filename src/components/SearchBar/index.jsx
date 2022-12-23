// import Input from "../Input";
import React, { useState, useEffect} from "react";
// const { Search } = Input;

const useDounce = (data, ms) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(data);
    }, ms);
    return () => {
      clearTimeout(handler);
    };
  }, [data, ms]);

  return value;
};

const SearchBar = (props) => {
  // data props
  const currentItems = props.currentItems;
  const catchData = props.catchData;

  // state
  const [searchText, setSearchText] = useState("");

  // interval Value
  const text = useDounce(searchText, 1000);

  //
  const onSearch = (value) => console.log(value);

  // handle search
  const handleSearch = (event) => {
    event.preventDefault();
    const newEvent = event.target.value;
    setSearchText(newEvent);
  };

  //
  useEffect(() => {
    if(searchText !== ''){

      const lowerCaseSearchText = searchText.toLowerCase();

      const newFilteredData = currentItems.filter((item) => {
        return (
          // coba id
          item.ID.toLowerCase().includes(lowerCaseSearchText) ||
          item.name.toLowerCase().includes(lowerCaseSearchText) ||
          item.category.toLowerCase().includes(lowerCaseSearchText) ||
          item.description.toLowerCase().includes(lowerCaseSearchText)
        );
      });
      catchData(searchText, newFilteredData)
    }
    else{
      catchData('')
    }
  }, [text])

  return (
    <div className="">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  name="search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6F8A6E] focus:border-[#6F8A6E] block w-full pl-10 p-2.5  "
                  placeholder="Search"
                  required
                  value={searchText}
                  onChange={handleSearch}
                />
              </div>

            </form>
          </div>
    // <Search
    //   placeholder="input search text"
    //   onSearch={handleSearch}
    //   style={{
    //     width: 200,
    //   }}
    // />
  );
};

export default SearchBar;
