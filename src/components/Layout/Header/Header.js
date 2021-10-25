import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../app/slices/uiSlice";
import { SHeader } from "./styles";

const Header = () => {
    const dispatch = useDispatch();

    const toggleThemeHandler = () => {
        dispatch(uiActions.toggleTheme());
    };

    return (
        <SHeader>
            <button onClick={toggleThemeHandler}>toggle theme</button>
        </SHeader>
    );
};

export default Header;
