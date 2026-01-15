type Props = {
    title: string,
    description: string
}
export default function BlueBanner({ title, description }: Props) {
    return (
        <section className="">
            <div className="bg-blue-200">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                    <p className="max-w-4xl mx-auto text-sm md:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}