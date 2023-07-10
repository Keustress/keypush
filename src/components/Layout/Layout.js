import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styled from "styled-components"


const Layout = (props) => {
    return (
        <Layout_container>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </Layout_container>
    )
}

export default Layout

const Layout_container = styled.div`
    padding-top: 50px;
`