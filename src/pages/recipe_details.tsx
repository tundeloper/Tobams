import styled from "styled-components"
import StyledVideo from "../components/recipe_details/video"
import StyledAbout from "../components/recipe_details/about"
import StyledFooter from "../components/footer"
import StyledMeals from "../components/meals"
import StyledForm from "../components/form/form"

const Details = () => {
    return <main style={{margin: ".5rem 2rem .5rem 2rem"}}>
        <StyledAbout />
        <StyledVideo />
        <p style={{marginTop: '3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <StyledForm />
        <h1 style={{textAlign: 'center', marginTop: '3rem', fontWeight: '700', fontSize: '2rem'}}>You may like these recipe too</h1>
        <StyledMeals />
        <StyledFooter />
    </main>
}

const StyledDetails = styled(Details)`

`

export default Details