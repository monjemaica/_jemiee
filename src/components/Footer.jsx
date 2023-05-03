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
                    <a href="/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="/"><i class="fa-brands fa-github"></i></a>
                    {/* <img src="../assets/images/facebook.png" alt="" />
                    <img src="../assets/images/linkedin.png" alt="" />
                    <img src="../assets/images/social.png" alt="" /> */}
                </div>
                <div className="footer--xxs">&copy;Copyright All rights reserved</div>
            </div>
        </>
    );
}

export default Footer;