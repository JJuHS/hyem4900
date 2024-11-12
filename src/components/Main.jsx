import React from "react";
import SubmitButton from "./buttons/SubmitButton";

function Main() {
    return (
        <>
            <span
                className="text-9xl"
            >
                텍스트 짱 커
            </span>
            <br/>
            <SubmitButton SubmitButtonText="자기는 천재!" />
            <br/>
            <span className="">그리드 설정해보기!</span>
            <div className="grid grid-cols-12">
                <div className="col-span-3">3칸</div>
                <div className="col-span-8">8칸</div>
                <div className="col-span-1">1칸</div>
            </div>
        </>
    )
}

export default Main;