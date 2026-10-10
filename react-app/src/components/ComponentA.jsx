import ComponentB from "./ComponentB";
function ComponentA({name}) {
  return (
    <div>
      <h1>This is Component A</h1>
      <ComponentB name={name}/>
    </div>
  );
}
export default ComponentA;