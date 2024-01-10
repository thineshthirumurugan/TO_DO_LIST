function Footer({length}) {
    const year=new Date();
  return (
    //<footer>Copyrigth &copy; {year.getFullYear()}</footer>
    <footer>{length} Items {length===1 ? "Founding":"Founded"}</footer>
  )
}

export default Footer