export default function Head() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Gartendienst Wien",
        "image": "https://gartendienst-wien.at/logo.png",
        "email": "info@gartendienst-wien.at",
        "telephone": "+43 660 123 4567",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wien",
            "postalCode": "1130",
            "addressCountry": "AT"
        },
        "url": "https://gartendienst-wien.at",
        "areaServed": ["Wien", "Niederösterreich", "Hietzing"],
        "description": "Professionelle Gartenpflege, Rasenmähen und Bewässerungssysteme in Wien.",
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "€"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <meta name="google-site-verification" content="kMtO4-ZERpwNndx0dOMbSwlSsSgi47KYoCy2OoMM0C0" />
        </>
    );
}

