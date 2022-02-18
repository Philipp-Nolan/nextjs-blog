export default function Custom404() {
    return <div className="container">
        <h1><span className="select">404</span> - Page Not Found</h1>
        <style jsx>{`
        .container {
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .select{
            color:orangered
        }
      `}</style>
        </div>
}
