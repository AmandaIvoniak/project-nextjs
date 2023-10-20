import { IMGContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
    return (<SuccessContainer>
        <h1>Compra efetuada!</h1>
        <IMGContainer />
        <p>
            Uhuuuuu <strong>Diego</strong>, sua <strong>camiseta </strong> esta acaminho de casa!
        </p>
        <Link href=""> Voltar ao catalogo </Link>
    </SuccessContainer>)
}