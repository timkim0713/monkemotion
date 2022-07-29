import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import Article from "../components/Article"


const RESEARCH_CONTENT = [

    {
        title: "First Title",
        date: "August 2nd, 2022",
        author: "Waan Choi",
        content: "abc"

    },

    {
        title: "Second Title",
        date: "August 2nd, 2022",
        author: "Waan Choi",
        content: "abc"

    },


    {
        title: "Third Title",
        date: "August 2nd, 2022",
        author: "Waan Choi",
        content: "abc"

    }
]

function Research() {
    return (
        <Box>
            {RESEARCH_CONTENT.map((data, index) =>
                <Article
                    title={data.title}
                    date={data.date}
                    author={data.author}
                    content={data.content}
                />
            )}
        </Box>
    );
}

export default Research;
