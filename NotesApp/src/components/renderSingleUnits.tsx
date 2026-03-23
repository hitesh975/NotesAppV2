import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteIcon from '../assets/delete.svg';

interface RenderSingleUnitsProps {
    component: any[]; //any for now
    setComponent: React.Dispatch<React.SetStateAction<any[]>>; //any for now
}

export default function RenderSingleUnits({component, setComponent}: RenderSingleUnitsProps){
    const navigate = useNavigate
}