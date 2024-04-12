import './AgeSelection.css'
const AgeFilterDropdown = ({ selected, onSelect }) => {
    const options = [...Array(14).keys()].map((age) => age + 3)
    return (
        <div className="dropdown-menu" aria-labelledby="ageFilterDropdown">
          {options.map(option => (
            <div key={option}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  id={option}
                  checked={selected === option}
                  onChange={() => onSelect(option)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
     
    );
  };

  export default AgeFilterDropdown