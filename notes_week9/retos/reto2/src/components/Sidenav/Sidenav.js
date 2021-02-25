export default function Sidenav(){
    let url = "";
    return (
        <aside>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href={url}>Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={url}>Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={url}>Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href={url} tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </aside>
    );
};