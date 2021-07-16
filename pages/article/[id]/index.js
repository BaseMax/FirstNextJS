import { useRouter } from "next/dist/client/router";

const article = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            This is article {id}
        </div>
    )
}

export const getServerSideProps = async() => {
    
}
export default article;
