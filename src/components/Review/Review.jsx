import React from "react";

export const Review = ({ text }) => {
    if (!text) {
        return null;
    }

    return (
        <div>
            <p>{text}</p>
        </div>
    );
};
