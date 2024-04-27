import React from 'react';
import {Stack} from "@mui/material";
import {category} from "../constants/constants";
import "./category.css"

const Category = ({handleToggle, selectCategory}) => {
    return (
        <Stack direction={'row'} style={{overflowX: 'scroll'}}>
            {category.map((item, index) =>
                <button
                    key={index} type='button'
                    className='category-btn'
                    onClick={() => handleToggle(item.name)}
                    style={{
                        backgroundColor: selectCategory === item.name && '#8c61ff ',
                        color: selectCategory === item.name && 'white '
                    }}
                >
                    <span style={{
                        marginRight: 10,
                        color: selectCategory === item.name ? 'white' : '#8c61ff'
                    }}>{item.icon}</span>
                    <span style={{color: selectCategory === item.name ? 'white' : '#8c61ff'}}>{item.name}</span>
                </button>
            )}
        </Stack>
    );

}

export default Category;