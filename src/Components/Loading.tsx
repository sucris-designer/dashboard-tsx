import React from "react"

const StyleLoading: React.CSSProperties ={
    border: "var(--gap-s) solid var(--color-2)",
    width: "var(--gap)",
    borderRadius: "50%",
    borderRightColor: "var(--color-4)",
    height: "var(--gap)",
    animation: "spin 1s infinite",
}

const Loading = () => {


 return <div style={StyleLoading}></div>
}

export default Loading;