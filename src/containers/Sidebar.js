import React from 'react';


const SideBar = (props) => {
    const { menus } = props;
    return (
        <div className="nav-side">
            <ul>
                {
                        menus.map(data => {
                            return (<li >
                                <a href={data.path}>#{data.id}-{data.name}</a>
                            </li>)
                        })

                }

                {/*  <li><a href="/counter">Project#1 Counter</a></li>
            <li><a href="/layout">Project#2 Layout</a></li>
            <li><a href="/list">Project#3 List</a></li>
            <li><a href="/todo">Project#4 Todo</a></li> */}
            </ul>
        </div>
    );
}

export default SideBar;