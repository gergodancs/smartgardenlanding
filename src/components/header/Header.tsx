import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Image
                src="/images/logowaasss.png"
                alt="Smart Garden controller"
                width={90}
                height={90}
                priority
            />
            <div className="header-text">Ihr Bewässerungsspezialist in Wien</div>
        </header>
    )
}

export default Header;