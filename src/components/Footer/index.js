import './style.css'

const Footer = () => {
    return (
        <footer className='footer-site'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imgs/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imgs/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imgs/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imgs/logo.png" alt="" />
            </section>
            <section>
                <p>
                    By Luzonni
                </p>
            </section>
        </footer>
    )
}

export default Footer