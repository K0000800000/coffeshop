import { Sections } from "../Sections/Sections"
import { Title } from "../Title/Title"

export const Home = ({ data }) => {
    return (
        <>
            <Title />
            <Sections {...data} />
        </>
    )
}