const navNames = ["top", "about", "comunity", "contact"];



export const Navbar = () => {
    return(
        <div className="flex justify-between p-4 border-b">
            {
                navNames.map((name, i) => {
                    return(
                        <div key={i} className="font-semibold hover:text-blue-500">{name}</div>
                    )
                })
            }
        </div>
    )
} 