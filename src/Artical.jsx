import { Container } from "react-bootstrap"

export const Artical = () =>{
    return(
        <section className="Artical-banner">
             <Container>
                <div className="row ">
                    <div className="artical-details">
                         <div align="center">
                         <h3 className="text-white" >Venenatis Nisl Porta</h3>
                         <p className="text-white" >Lorem vestibulum gravida ipsum non velit aliquam lobortis</p>
                        <button className="btn btn-primary" > Read more</button>
                         </div>
                    </div>
                </div>
             </Container>
        </section>
    )
}