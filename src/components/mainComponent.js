import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/slices/slice";
import Card from "./card";
import Pagination from "@mui/material/Pagination";
import {Link} from "react-router-dom"
import { Box } from "@mui/material";

const Main = () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);

    const state = useSelector((state) => state.coreReducer);
    const load = useSelector((state)=> state.load.load)

    const handleChange = (e)=>{
        setOffset((e.target.innerText - 1) * 9);
    };

    useEffect(() => {
    dispatch(getData({
        limit: 9,
        offset: offset,
    }));
    }, [offset]);

    return (
    <>
    <Box
        sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        }}
    >
        
        {load? "загрузка..." : state?.data.map((item) =>
            <Link to={"/char/"+ item?.char_id} state={{item:item}}>
                <Card item={item} />
            </Link> 
            )}
        <Pagination count={10} sx={{marginBottom:"20px", marginLeft:"35%"}} color="primary"
            onChange={handleChange}/>
        </Box>
    </>
    );
};

export default Main;
