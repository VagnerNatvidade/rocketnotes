import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite um título para nota");
    }

    if (newLink) {
      return alert("N vai adicionar o link?");
    }

    if (newTag) {
      return alert("N vai adicionar a tag?");
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags,
    });

    alert("Note criada com sucesso");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/" href="/">
              voltar
            </Link>
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Links uteis">
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              );
            })}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section tittle="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                );
              })}
              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
