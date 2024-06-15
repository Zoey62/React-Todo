import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    //.tasks-left {
    //    color: #20c997;
    //    font-size: 18px;
    //    margin-top: 40px;
    //    font-weight: bold;
    //}
`;

const TodoHead = () => {
    return (
        <TodoHeadBlock>
            <h1>TODO LIST</h1>
            <div className="day">{getToday()}</div>
            {/*<div className="tasks-left">할 일 3개 남음</div>*/}
        </TodoHeadBlock>
    );
}

const getToday = () => {
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    const today = new Date().getDay();
    const todayLabel = week[today];

    return todayLabel;
}

export default TodoHead;