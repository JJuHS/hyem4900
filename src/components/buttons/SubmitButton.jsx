import React from "react";

function SubmitButton({ SubmitButtonText }) {
    const clickButtonHandler = () => {
        window.alert("혜민이 이뿌니!")
    }
    return (
        <button
            className="w-[250px] bg-orange-500 rounded-xl hover:bg-red-500"
            onClick={clickButtonHandler}
        >
            {SubmitButtonText}
        </button>
    )
}

export default SubmitButton;