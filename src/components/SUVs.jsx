import iconSUVs from "../assets/icon-suvs.svg"

export default function SUVs() {
  return (
    <section className="bg-green p-12">
        <img src={iconSUVs} alt="icone dos suv" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs/carros/estoque?tipoveiculo=carros&necessidade=SUVs" target="_blank">Ver mais</a>
    </section>
  )
}