import { memo } from "react";
import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { UserIconWithName } from "../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;
  console.log("UserCard");

  return (
    <Card>
      <UserIconWithName image={user.imgsrc} alt="Profile" name={user.name} />
      <SDl>
        <dt> mail </dt>
        <dd> {user.email} </dd>
        <dt> TEL </dt>
        <dd> {user.tel} </dd>
        <dt> 会社名 </dt>
        <dd> {user.company.name} </dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;

  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
