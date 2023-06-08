import { PageHeader } from "./ListPageHeader.styled";

const ListPageHeader = ({ title, user }) => {
  return (
    <PageHeader>
      <h1>{title}</h1>
      <div>
        <p>{user}</p>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
      </div>
    </PageHeader>
  );
};
export default ListPageHeader;
