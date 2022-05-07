import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Nums from "../component/selectNum";

const style = `

`;

const Index = () => {
    return (
        <>
            <Navbar />
            <Nums />
            <style jsx>{style}</style>
        </>
    );
};

export default Index;
