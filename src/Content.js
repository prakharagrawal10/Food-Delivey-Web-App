const Content = () => {
    const title = 'Welcome to the new blog';
    const handleclick = () =>{
        console.log("Hello Wolrd");
    }

    const handleclickAgain = (name) =>{
        console.log("Hello" + name);
    }


    return (
        <div className="home">
            <h2>{title}</h2>
            <button onClick={handleclick}>Click me</button>
            <button onClick={()=>{
                handleclickAgain("Prakhar")
            }}>Click me Again</button>
        </div>
    );
}
 
export default Content;