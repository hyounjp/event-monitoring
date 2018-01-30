import React, { Component } from 'react';
import './Leftmenu.css';

class Leftmenu extends Component {
  render() {
    return (
      <aside className="side">
        <section className="event-display">이벤트 표출영역</section>
        <section className="event-state">
          <div className="title">차량 이벤트 현황</div>
          <div className="event-list"></div>
        </section>
        <div className="search">
          <input type="text" name="keyword" placeholder="검색어를 입력하세요."/>
          <button className="btn-search"></button>
        </div>
        <section className="search-result">
        </section>
        <section className="weather">
          <div className="title">기상 정보</div>
          <div className="weather-info">
          </div>
        </section>

      </aside>
    );
  }
}

export default Leftmenu;
