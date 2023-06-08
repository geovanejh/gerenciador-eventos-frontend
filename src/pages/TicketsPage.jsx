import React from "react";
import Aside from "../components/Aside/Aside";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";
import { ListPage } from "../components/ListPages/ListPage";
import ListPageHeader from "../components/ListPages/ListPageHeader/ListPageHeader";
import { ListPageContainer } from "../components/ListPages/ListPageContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import PeopleListItem from "../components/PeopleListItem/PeopleListItem";
import { useEffect } from "react";
import SearchField from "../components/Form/SearchField/SearchField";

const TicketsPage = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  const navigate = useNavigate();

  const setup = async () => {
    setFilteredPeople([{ nome: "XXXXXXXXXX", cpf: "XXXXXXXXXXX" }]);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <Aside />
      <DashboardContainer>
        <ListPage>
          <ListPageHeader title="Meus ingressos" user="Geovane Hartmann" />
          <ListPageContainer layout="1.5fr 1.5fr 1fr 1fr 1fr 0.5fr">
            <div>
              <SearchField
                value={searchField}
                placeholder="Search..."
                onChange={(e) => {
                  setSearchField(e.target.value);
                }}
              />
              <Button primary onClick={() => navigate("form/")}>
                Cadastrar
              </Button>
            </div>
            {filteredPeople.length < 1 ? (
              <div>Nenhum usuário encontrado.</div>
            ) : (
              <ul>
                <li>
                  <h3>Título</h3>
                  <h3>Data</h3>
                  <h3>XXXXX</h3>
                  <h3>DXXXX</h3>
                  <h3>XXXX</h3>
                  <h3></h3>
                </li>
                {filteredPeople.map((e) => (
                  <PeopleListItem key={e.idPessoa} person={e} />
                ))}
              </ul>
            )}
          </ListPageContainer>
        </ListPage>
      </DashboardContainer>
    </>
  );
};

export default TicketsPage;
