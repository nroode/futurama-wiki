import { useRouter } from "next/router";


export default function About() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <h1>All about me { id }</h1>
    )
}