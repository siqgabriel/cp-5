import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <p>O conteúdo que você está tentando acessar não está disponível!</p>
        <Image src="/img/404-not-found.jpg" alt="404" width={500} height={500} priority={true} />
    </div>
  );
}