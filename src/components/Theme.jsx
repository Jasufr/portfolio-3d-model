import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

  export const Theme = (props) => {
    const {onThemeChange} = props;
    const [buttonLabel, setButtonLabel] = useState(<FontAwesomeIcon icon={faMoon} />);

    // useEffect(() => {
    //   if (props.sunPosition[1] === -1) {
    //     setButtonLabel("Toggle Day Mode");
    //   } else {
    //     setButtonLabel("Toggle Night Mode");
    //   }
    // }, [props, sunPosition]);

    const changeThemeButton = () => {
      // Get the current sunPosition value from the parent component
      onThemeChange(prevSunPosition => {
        if (prevSunPosition[1] === -1) {
          // If the sunPosition is [-1], update it to [10, 1, 10]
          setButtonLabel(<FontAwesomeIcon icon={faSun} />);
          return [10, 1, 10];
        } else {
          // If the sunPosition is [1], update it to [10, -1, 10]
          setButtonLabel(<FontAwesomeIcon icon={faMoon} />);
          return [10, -1, 10];
        }

      });
      // Check the current sunPosition value
    };

    return (
      <div className={`z-10 fixed top-0 left-0 bottom-0 overflow-hidden px-3 py-1 text-2xl`}>
        <button className="hover:text-yellow-50 transition-colors duration-200" onClick={changeThemeButton}>{buttonLabel}</button>
      </div>
    );

}
