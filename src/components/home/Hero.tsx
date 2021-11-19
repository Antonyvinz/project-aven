import { Carousel } from "antd";
import React from "react";

const items = [
    {
        key: '1',
        title: 'WE CREATE CLEAN TEMPLATES',
        content: 'ELEGANT & CLEAN MUSE TEMPLATE DESIGNERS',
    },
    {
        key: '2',
        title: 'CLEAN & ELEGANT TEMPLATES',
        content: 'POWERED BY BOOTSTRAP',
    },
    {
        key: '3',
        title: 'MODERN READY MUSE TEMPLATES',
        content: 'INSPIRATIONAL MODERN WEBSITES MADE BY OUR TEAM',
    },
]

function AppHero() {
    return (
        <div className="heroBlock">
            <Carousel autoplay>
                {items.map(item => {
                    return (
                        <div className="container-fluid" key={item.key}>
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default AppHero;