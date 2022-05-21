import { useSelector, useDispatch } from "react-redux";
function Main() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {state &&
        state.data.data.datalist.list.map((el: any, id: number) => {
          return <p>{el.name}</p>;
        })}
    </>
  );
}

export default Main;
