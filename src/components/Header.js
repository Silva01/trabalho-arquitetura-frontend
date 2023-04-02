import { Navbar, Nav } from 'react-bootstrap'
import './Header.css';

function Header() {
  return (
    <div>
      <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="mx-auto cor-padrao">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/about">Sobre</Nav.Link>
            <Nav.Link href="/description">Descrição</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      <div>
        <div class="row">
          <div class="col-12 colorido">
            <div class="row">
              <div class="col-3">
                <img class="img-fluid redondo" src="https://media.istockphoto.com/id/1361794658/pt/foto/a-labrador-retriever-dog-in-the-park.jpg?s=1024x1024&w=is&k=20&c=KPIhavT_TBMj9KVI5GVPMdQgLWIJuNMF0hUmFaGUbb4=" alt="Tibetan Mastiff" />
              </div>
              <div class="col-7">
                <p class="texto">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Header