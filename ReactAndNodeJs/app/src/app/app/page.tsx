export default function App() {
    let box: string[] = ["signin", "signout"];
    return (
        <div>
            <ul>
                {box.map((val, index) => {
                    return (
                        <li key={index}>
                            <a href={val}>{val}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
