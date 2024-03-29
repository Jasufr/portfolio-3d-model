import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

  export const Theme = (props) => {
    const {onThemeChange} = props;
    const [buttonLabel, setButtonLabel] = useState(<FontAwesomeIcon icon={faMoon} />);
    const changeThemeButton = () => {
      onThemeChange(prevSunPosition => {
        if (prevSunPosition[1] === -1) {
          setButtonLabel(<FontAwesomeIcon icon={faSun} />);
          return [10, 3, 10];
        } else {
          setButtonLabel(<FontAwesomeIcon icon={faMoon} />);
          return [10, -1, 10];
        }

      });
    };

    return (
      <div className={`z-10 fixed top-0 left-0 bottom-0 overflow-hidden px-2 py-1 text-2xl`}>
        <button className="hover:text-yellow-50 transition-colors duration-200 text-sky-800" onClick={changeThemeButton}>{buttonLabel}</button>
      </div>
    );

}
