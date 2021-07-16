import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>NextJS</span> Dev!
            </h1>
            <p className={Header.description}>
                Keep up to date with the latest web dev news.
            </p>
            {/* <style jsx>
                {`
                .title {
                    color: red;
                }
                `}
            </style> */}
        </div>
    )
}
export default Header;
