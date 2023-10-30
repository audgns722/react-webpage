import React from 'react'

const Banner = ( props ) => {
    return (
        <section id='bannerType' className={`banner__wrap ${props.element}`}>
            <h2 className='blind'>{props.title}</h2>
            <div className='banner__inner'>
                <h3 className='title'>웹표준 사이트</h3>
                <p className='desc'>
                    꿈은 실패했을 때  끝나는 게 아니라 포기했을 때 끝나는 것이다.
                    <a href='/' title='유튜브 페이지 이동'>- 리처드 닉슨 -</a>
                </p>
                <span className='small'>배너 유형01</span>
            </div>
        </section>
    )
}

export default Banner