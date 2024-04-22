import { Container } from "react-bootstrap"

export const Discription = () =>{
    return(
        <section className="dicription">
            <Container>
                <div className="row">
                    <div className="col-lg-3"> 
                        <p className="mb-3">Aliquet elit vel nisl commodo</p>
                        <h3>Eget Curabitur Porta Massa Nec Mollis</h3>
                    </div>
                    <div className="col-lg-8">
                        <p className="mb-2">Tincidunt mauris et gravida dui nec consectetur felis vivamus aliquet lectus sit amet augue bibendum ultrices praesent condimentum ultrices justo at commodo vestibulum a hendrerit augue vitae posuere lacus nam placerat congue.</p>
                        <p className="mb-3">Elit quis cursus erat lobortis et ut vehicula velit ante vel ultricies dui porta sit amet morbi at eros suscipit…</p>
                        <button className="btn btn-primary text-uppercase"> read more </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}