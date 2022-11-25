const DashAside = ({ currTab }) => {
  return ( 
    <>
      <aside className="content">
        { currTab && currTab }
      </aside>
    </>
   );
}
 
export default DashAside;