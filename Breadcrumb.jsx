function Breadcrumb({path}) {
    return (
        <div className="breadcrumb">
            {path.join(" > ")};
        </div>
    )
}
{/* React passes props like 
{
  path: ["Home", "Topics", "Variables"]  // Hence we need destructuring
} 
*/}

export default Breadcrumb;