export default function Section({children, title}) {
    return (
        <section className="text-xl mb-10 text-start">
            <h2 className="text-3xl/12 font-bold text-start underline underline-offset-16 mb-8 decoration-blue-300 text-blue-400">{title}</h2>
            {children}
        </section>
    )
}