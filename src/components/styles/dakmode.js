import { connect, css, Global } from "frontity";
import React from "react";

const DarkMode = ({ state }) => {
    const { mode, text } = state.theme;
    return (
        <>
            <Global 
                styles={css`
                :root {
                    --brand: #0077b5;
                    --text: ${mode === 'light' ? '#212121': '#fff'};
                    --darktext: ${mode === 'light' ? '#fff': '#fff'};
                    --background: ${mode === 'light' ? '#fff': '#121212'};
                    --menubackground: ${mode === 'light' ? 'var(--brand)': '#121212'};
                    --postbackground: ${mode === 'light' ? '#F2F3FC': '#1E1E1E'};
                    --darkbackground: ${mode === 'light' ? '#042a4e': '#1E1E1E'};
                    --border: ${mode === 'light' ? '#e0e0e0': '#333'};
                    --title: ${mode === 'light' ? 'var(--brand)': '#80bbda'};
                    --link: ${mode === 'light' ? 'var(--brand)': '#80bbda'};
                    --button: ${mode === 'light' ? 'var(--brand)': '#1E1E1E'};
                    --buttonhover: ${mode === 'light' ? '#fff': '#fff'};
                    --menutogglehover: ${mode === 'light' ? 'var(--brand)': '#80bbda'};
                    --menutogglehoverclose: ${mode === 'light' ? '#000': '#80bbda'};
                    --code: ${mode === 'light' ? '#121212': '#343434'};
                    --imgfilter: ${mode === 'light' ? 'brightness(100%)' : 'brightness(90%)'};
                    --transition: 500ms;
                  }
            `}
            />
        </>
    );
};

export default connect(DarkMode);