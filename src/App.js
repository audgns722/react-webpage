import React from 'react'
import './assets/css/reset.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Image from './components/Image'
import ImgText from './components/ImgText'
import Card from './components/Card'
import Banner from './components/Banner'
import Text from './components/Text'

const App = () => {
    return (
        <>
            <Header element='dream' />
            <Main>
                <Slider element='dream' title='슬라이드 유형' />
                <Image element='section dream' title='포트폴리오가 실력이다.' />
                <ImgText element='section dream' title='이미지 텍스트 유형' />
                <Card element='section dream' title='웹표준 사이트 연습' />
                <Banner element='dream' title='배너 영역' />
                <Text element='section dream' title='스크립트를 익히는 방법' />
            </Main>
            <Footer element='dream section gray' title='푸터 영역' />
        </>
    )
}

export default App