import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./destinos.module.css";

function Destinos() {
  return (
    <div>
      <h2 className={styles.titleDestinos} id="Destinos">Destinos preferidos</h2>

      <div className={styles.tododestinos}>
        <div className={styles.containerdestinos}>
          <div className={styles.containercards}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../../assets/dique-de-ullum.jpg")}
              />
              <Card.Body>
                <Card.Title>Dique de Ullúm</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className={styles.containercards}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../../assets/pampa-el-leoncito.jpg")}
              />
              <Card.Body>
                <Card.Title>Pampa del Leoncito</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className={styles.containercards}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../../assets/talampaya3.jpg")}
              />
              <Card.Body>
                <Card.Title>Parque Nacional de Talampaya</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className={styles.containercards}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../../assets/valle-de-la-luna.jpg")}
              />
              <Card.Body>
                <Card.Title>Ischigualasto - Valle de la Luna</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className={styles.containercards}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../../assets/dique-punta-negra.jpg")}
              />
              <Card.Body>
                <Card.Title>Dique Punta Negra</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className={styles.containercards}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../../assets/vista-parcial-del-jardin.jpg")}
              />
              <Card.Body>
                <Card.Title>Jardín de los Poetas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinos;
