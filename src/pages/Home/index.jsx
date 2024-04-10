import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles.js";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input/index.jsx";
import { Section } from "../../components/Section";
import { Notes } from "../../components/Notes/index.jsx";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Notes
            data={{
              title: "React",
              tags: [
                { id: "1", name: "React" },
                { id: "2", name: "Rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNotes to="/new">
        <FiPlus />
        Criar Nota
      </NewNotes>
    </Container>
  );
}
