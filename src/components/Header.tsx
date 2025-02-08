interface IHeaderProps {
  title: string;
}

type NewType = React.FC<IHeaderProps>;

export const Header: NewType = ({ title }) => {
  return (<h1>{title}</h1>)
}