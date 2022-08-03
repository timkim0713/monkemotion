import * as React from 'react';
import Box from '@mui/material/Box';
import MainContent from '../MainContent';
import MainCarousel from "../components/MainCarousel"
import MiniGallery from '../components/MiniGallery';
import { Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const contents = "我叫崔完,今年十六岁. 我今年上九年级,我在韩国出生, 现在在韩国首尔国际学校学中文三. 我从上七年级开始学习中文. 我学 中文学了三年.  我开始学中文,因为我爸爸和妈妈告诉我中文很有用. 我学中文,因为我觉得学中文老师教中文教得很有意思.学中文, 我有两个好方法. 第一练习写汉字的时候, 我每天晚上写十个很难的汉字. 我开始学中文的时候,我觉得写汉字很难. 我觉得‘请’和‘餐’很难写. 我写‘请’的时候,经常忘了写左边的笔画. 我写‘餐’的时候,常忘了中间的点.因为我每天练习,所以我现在写得很不错.第二, 我练习听力的时候, 每天早上起床以后,一边吃早饭,一边听录音. 我每天早上听半个小时的录音. 除了听录音以外,我还一有时间就看中国电影. 虽然听力不容易,但是这样练习就可以学好. 我知道中文和英文有一样的地方,也有不一样的地方, 一样的地方是中文和英文都是很有用的语言."

function Home() {
    return (
        <Box>
            <MainCarousel />

            <Box mt={10}>
                <MainContent img={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEXjHRn////hAAD0vLz87ezyrKv75+f3zczjFxLiEgzlPTvpYV/sgYDjGRXiDwn40dHlNTP1wsL99PTrdnTxpqXnUU/lOjfqaGbnS0npX12OVvhKAAABzElEQVR4nO3cy27iQBBAUfCQweYRXgkJ//+js7TLEaUMlBFC52ybTulm5U7azGYAAAAAAAAAAAAAAAAAAAAAvKImM83ILhv5Xj2tOfy57m2SxG6dzDxsqhObeeI4SWGzyWaW/1bTwoXC20YqLB6nsJ7C6nEK6ymsHqewnsLqcYu/Q8cHFL6f4syJC0fnw48HFM7e48zFxIVB8/aIwtFMhbXTFE4xU2HtNIVTzFRYO03hFDMV1k5TOLCNz89tWGzj4jab+ayF2/1uObD7HCa2n3FxnyQ+bWG7Ch+dr7vBYreOi6v26s9RWEzhgEKF/UyFpRQOKFTYz1RY6o7CS9P1mssLFI7PFqfLunc5vcDZYnw+3IWduxc4H453LsPO5X/sVFhKYbJT4fWdCkspTHYqvL5TYSmFyc7nLczvRCWvs9z+5J3eifqIiwWB2b22eVhbnIaJ23PYufg6r3rnr7h4Hibm99qOceb9iendxJHNcNzPE3DbS0/A+d3EkScq/P1fMRQqVKhQoUKFChUq/FmYvY8/elU+RGz3YefhO9z6+o6L4T8z6fv445kVx6ff68LG22/upd+pMHJ/IAAAAAAAAAAAAAAAAAAAAABP6B/BYC8m2V+4agAAAABJRU5ErkJggg=="} title={"We Love Monkeys"} content={contents} subtitle={"August 3rd 2022"} />
            </Box>

            <Box mt={10}>

                <MiniGallery />

                <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} mt={6}>
                    <Typography variant={"body2"} sx={{ textAlign: "center" }}>
                        Contribute Now    Contribute Now    Contribute Now    Contribute Now
                    </Typography>
                    <Box display={"flex"} justifyContent={"center"} width={"100%"} mt={3}>


                        <Link to={"/contribute"} style={{ textDecoration: 'none' }}>
                            <Button variant={"outlined"} >
                                <Typography variant={"h6"}>
                                    Contribute Now
                                </Typography>
                            </Button>
                        </Link>


                    </Box>
                </Box>


            </Box>

        </Box >
    );
}

export default Home;
