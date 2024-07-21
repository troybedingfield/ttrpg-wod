import './Footer.scss'

export default function Footer({ ...props }) {
    const { } = props

    let year = new Date().getFullYear()

    return (
        <footer>
            <div className="footer-container">
                © {year} Troy Bedingfield
            </div>
        </footer>
    )
}