const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="separator x2 pd-2">
                    <div className="footer--text">
                        <div className="footer--name sm">Developed by Jemaica Mae Mon</div>
                    </div>
                </div>
                <div className="links">
                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="/"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="footer--xxs">&copy;Copyright All rights reserved</div>
            </div>
        </>
    );
}

export default Footer;